import type { SportType } from '@/lib/types';

export const KOREA_WIN_IMAGE_LIST = [
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-0.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-2.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-3.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-4.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-5.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-6.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-7.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-14.webp',
];

export const YONSEI_WIN_IMAGE_LIST = [
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-1.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-8.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-9.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-10.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-11.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-12.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-13.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-15.webp',
];

export const DRAW_IMAGE_LIST = [
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-16.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-17.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-18.webp',
  'https://toky-storage.s3.ap-northeast-2.amazonaws.com/assets/shared-card/card-19.webp',
];

export const PREDICTION_QUESTION: Record<SportType, string> = {
  야구: '안타를 칠 선수를 예측해주세요',
  축구: '총 득점이 가장 많을 선수를 예측해주세요',
  농구: '총 득점이 가장 많을 선수를 예측해주세요',
  럭비: '총 득점이 가장 많을 선수를 예측해주세요',
  아이스하키: '총 득점이 가장 많을 선수를 예측해주세요',
};
