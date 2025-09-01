import type { SportType } from '@/lib/types';

import card0 from '@/lib/assets/images/toky-share-card/card-0.webp';
import card1 from '@/lib/assets/images/toky-share-card/card-1.webp';
import card2 from '@/lib/assets/images/toky-share-card/card-2.webp';
import card3 from '@/lib/assets/images/toky-share-card/card-3.webp';
import card4 from '@/lib/assets/images/toky-share-card/card-4.webp';
import card5 from '@/lib/assets/images/toky-share-card/card-5.webp';
import card6 from '@/lib/assets/images/toky-share-card/card-6.webp';
import card7 from '@/lib/assets/images/toky-share-card/card-7.webp';
import card8 from '@/lib/assets/images/toky-share-card/card-8.webp';
import card9 from '@/lib/assets/images/toky-share-card/card-9.webp';
import card10 from '@/lib/assets/images/toky-share-card/card-10.webp';
import card11 from '@/lib/assets/images/toky-share-card/card-11.webp';
import card12 from '@/lib/assets/images/toky-share-card/card-12.webp';
import card13 from '@/lib/assets/images/toky-share-card/card-13.webp';
import card14 from '@/lib/assets/images/toky-share-card/card-14.webp';
import card15 from '@/lib/assets/images/toky-share-card/card-15.webp';
import card16 from '@/lib/assets/images/toky-share-card/card-16.webp';
import card17 from '@/lib/assets/images/toky-share-card/card-17.webp';
import card18 from '@/lib/assets/images/toky-share-card/card-18.webp';
import card19 from '@/lib/assets/images/toky-share-card/card-19.webp';

export const KOREA_WIN_IMAGE_LIST = [card0, card2, card3, card4, card5, card6, card7, card14];

export const YONSEI_WIN_IMAGE_LIST = [card1, card8, card9, card10, card11, card12, card13, card15];

export const DRAW_IMAGE_LIST = [card16, card17, card18, card19];

export const PREDICTION_QUESTION: Record<SportType, string> = {
  야구: '안타를 칠 선수를 예측해주세요',
  축구: '총 득점이 가장 많을 선수를 예측해주세요',
  농구: '총 득점이 가장 많을 선수를 예측해주세요',
  럭비: '총 득점이 가장 많을 선수를 예측해주세요',
  아이스하키: '총 득점이 가장 많을 선수를 예측해주세요',
};
