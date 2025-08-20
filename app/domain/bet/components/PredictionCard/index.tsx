import { type ForwardedRef, forwardRef } from 'react';
import Icon from '@/lib/assets/icons';
import type { PredictionResult } from '@/domain/bet/hooks/useCardShare';

import * as s from './style.css';

interface PredictionCardProps {
  nickname: string;
  numWinKorea: number;
  numWinYonsei: number;
  predictionResult: PredictionResult;
  src: string;
}
const PredictionCard = forwardRef(
  (
    { nickname, numWinKorea, numWinYonsei, predictionResult, src }: PredictionCardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <>
        {src && predictionResult ? (
          <div className={s.ShareCardWrapper} ref={ref}>
            <div className={s.ShareCard({ predictionResult })}>
              <div className={s.UserContainer({ predictionResult })}>{nickname}님의 예측</div>
              <div className={s.ScoreContainer}>
                <p className={s.UnivName}>고려대학교</p>
                <div className={s.ScoreWrapper}>
                  <div className={s.ScoreBox({ predictionResult })}>{numWinKorea}</div>
                  <div className={s.Colon}>:</div>
                  <div className={s.ScoreBox({ predictionResult })}>{numWinYonsei}</div>
                </div>
                <p className={s.UnivName}>연세대학교</p>
              </div>
              <div className={s.ShareFooter}>
                <p>2024 정기전 승부예측 토키</p>
                <Icon.Divider />
                <p>@official.toky</p>
              </div>
              <img className={s.CharacterImage} key={src} src={src} alt="character" />
            </div>
          </div>
        ) : (
          <div ref={ref}></div>
        )}
      </>
    );
  },
);

export default PredictionCard;
