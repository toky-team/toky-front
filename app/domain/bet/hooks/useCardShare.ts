import html2canvas from 'html2canvas';
import { useMemo, useRef, useState } from 'react';
import { DRAW_IMAGE_LIST, KOREA_WIN_IMAGE_LIST, YONSEI_WIN_IMAGE_LIST } from '../constants';
import { useToast } from '@/common/hooks/useToast';
import { useGetUserInfo } from '@/common/apis/useGetUserInfo';
import { useRefEffect } from '@/common/hooks/useRefEffect';
import { usePostShare } from '@/domain/bet/apis/usePostShare';
import { useGetShareScore } from '@/domain/bet/apis/useGetShareScore';
import { useQueryClient } from '@tanstack/react-query';

export type PredictionResult = 'KOREA' | 'YONSEI' | 'DRAW';

export function useCardShare() {
  const queryClient = useQueryClient();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCanvasLoading, setIsCanvasLoading] = useState(true);
  const [isShareLoading, setIsShareLoading] = useState(false);
  const [canvasImageUrl, setCanvasImageUrl] = useState('');
  const { data: userInfo } = useGetUserInfo();
  const { openToast } = useToast();
  const { data: scoreData, isLoading: isFetchLoading } = useGetShareScore();
  const { mutate: postShare } = usePostShare();
  const imageRef = useRef(null);
  const isLoading = isFetchLoading || isCanvasLoading || isDownloading || isShareLoading;

  const predictionResult: PredictionResult | undefined = useMemo(() => {
    if (!scoreData) return undefined;
    if (scoreData.kuScore > scoreData.yuScore) return 'KOREA';
    if (scoreData.kuScore < scoreData.yuScore) return 'YONSEI';
    return 'DRAW';
  }, [scoreData]);

  const imgSrc = useMemo(() => {
    if (!predictionResult) return undefined;
    const characterSrcList =
      predictionResult === 'KOREA'
        ? KOREA_WIN_IMAGE_LIST
        : predictionResult === 'YONSEI'
          ? YONSEI_WIN_IMAGE_LIST
          : DRAW_IMAGE_LIST;
    const randomIndex = Math.floor(Math.random() * characterSrcList.length);
    return characterSrcList[randomIndex];
  }, [predictionResult]);

  const shareRef = useRefEffect(
    (div: HTMLDivElement) => {
      if (!userInfo || !imgSrc || !scoreData) return;
      makeImageUrl(div);
    },
    [userInfo, imgSrc, scoreData],
  );

  const openShareSuccessToast = () => {
    queryClient.setQueryData(['ticket-count'], (old: number) => old + 1);
    openToast({ message: `응모권 1장 획득!` });
  };

  const downloadImage = async () => {
    if (imageRef.current === null) return;
    const name = 'my-prediction.png';
    setIsDownloading(true);

    const canvas = await html2canvas(imageRef.current, {
      allowTaint: true,
      removeContainer: true,
      useCORS: true,
      scale: 4,
      imageTimeout: 15000,
    });

    const imgUrl = canvas.toDataURL('image/png', 1.0);
    imageLinkDownload(imgUrl, `${name}`);
    setIsDownloading(false);
  };

  const imageLinkDownload = (blobLink: string, fileName: string) => {
    const url = window.document.createElement('a');
    url.download = fileName;
    url.href = blobLink;
    document.body.appendChild(url);
    url.click();
    document.body.removeChild(url);
    url.remove();
  };

  const makeImageUrl = async (div: HTMLDivElement) => {
    setIsCanvasLoading(true);
    const canvas = await html2canvas(div, {
      allowTaint: true,
      removeContainer: true,
      useCORS: true,
      scale: 4,
      imageTimeout: 15000,
    });
    const imgUrl = canvas.toDataURL('image/png', 1.0);
    setCanvasImageUrl(imgUrl);
    setIsCanvasLoading(false);
  };

  const imageUrlToBlob = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'image/png',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();

      return blob;
    } catch {
      alert('에러가 발생했습니다 다시 시도해주세요');
    }
  };

  const shareImage = async () => {
    if (!navigator.share) {
      alert('지원되지 않는 브라우저입니다. 모바일 크롬으로 접속해주세요!');
      return;
    }

    if (!canvasImageUrl) {
      alert('이미지를 준비 중입니다. 다시 한 번 시도해주세요');
      return;
    }
    setIsShareLoading(true);
    const blob = await imageUrlToBlob(canvasImageUrl);

    if (!blob) return;
    const name = 'my-prediction.png';
    const filesArray = [
      new File([blob], `${name}`, {
        type: 'image/png',
        lastModified: new Date().getTime(),
      }),
    ];

    if (navigator.canShare({ files: filesArray })) {
      try {
        await navigator.share({
          files: filesArray,
          // text: 'https://www.toky.com',
          // title: 'hi',
        });
      } finally {
        postShare(undefined, {
          onSuccess: openShareSuccessToast,
        });
        setIsShareLoading(false);
      }
    }
    setIsShareLoading(false);
  };

  return {
    isLoading,
    imageRef,
    shareImage,
    makeImageUrl,
    shareRef,
    downloadImage,
    scoreData,
    userInfo,
    isFetchLoading,
    predictionResult,
    imgSrc,
  };
}
