import { useEffect } from 'react';

import * as s from './style.css';

import { useCardShare } from '@/domain/bet/hooks/useCardShare';
import Icon from '@/lib/assets/icons';
import PredictionCard from '@/domain/bet/components/PredictionCard';

interface ShareModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}
// TODO loading spinner 추가 && 공유하기 버튼 클릭시 로딩 추가 && 버튼 위치 변경
export function ShareModal({ isModalOpen = true, onClose }: ShareModalProps) {
  const { shareImage, shareRef, imageRef, userInfo, scoreData, isFetchLoading, imgSrc, predictionResult } =
    useCardShare();

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden;`;
    return () => {
      document.body.style.cssText = `overflow: auto;`;
    };
  }, []);

  return (
    <>
      {isModalOpen && scoreData && userInfo && !isFetchLoading && predictionResult && imgSrc && (
        <div className={s.Wrapper}>
          <div className={s.Content}>
            <div ref={imageRef}>
              <PredictionCard
                ref={shareRef}
                src={imgSrc}
                predictionResult={predictionResult}
                nickname={userInfo.name}
                numWinKorea={scoreData.numWinKorea}
                numWinYonsei={scoreData.numWinYonsei}
              />
            </div>
            <div className={s.ContentWrapper}>
              <div className={s.ButtonWrapper}>
                <button className={s.CancelButton} onClick={onClose}>
                  <Icon.Cancel />
                </button>
                <button className={s.ShareButton} onClick={shareImage}>
                  <Icon.Share />
                  공유하기
                </button>
              </div>
              <div className={s.ToolTip}>
                @official.toky 태그하고 <br />
                공유 이벤트에 참여해보세요!
                <div className={s.ToolTipArrow} />
              </div>
            </div>
          </div>
          <div className={s.Backdrop({ isModalOpen })} />
        </div>
      )}
    </>
  );
}
