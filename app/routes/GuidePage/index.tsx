import { Link } from 'react-router';

import TopBar from '@/common/components/TopBar';
import guideImage from '@/lib/assets/images/guide_banner.webp';
import guide1 from '@/lib/assets/images/guide_1.webp';
import guide2 from '@/lib/assets/images/guide_2.webp';
import guide3 from '@/lib/assets/images/guide_3.webp';

import * as s from './style.css';

const Guide = () => {
  return (
    <div className={s.Container}>
      <TopBar hasHamburger>
        <h1 className={s.Title}>TOKY 이용 가이드</h1>
      </TopBar>
      <img src={guideImage} alt="guide" />
      <div className={s.Contents}>
        <div className={s.GuideContainer}>
          <div className={s.GuideHeader}>
            <div className={s.Index}>1</div>
            <h2>
              역대 전적 & 선수 정보
              <br />
              확인하기
            </h2>
            <p className={s.GuideDescription}>
              더 자세해진 역대 전적과 선수 정보로 돌아왔습니다!
              <br />
              성공적인 승부예측을 위해 꼭 살펴보세요.
            </p>
          </div>
          <img src={guide1} className={s.GuideImage} />
        </div>
        <div className={s.GuideContainer}>
          <div className={s.GuideHeader}>
            <div className={s.Index}>2</div>
            <h2>승부 예측하기</h2>
            <div className={s.DateText}>08.30(토)~경기 종료시 까지</div>
            <p className={s.GuideDescription}>
              우승팀·득점왕 선수까지 직접 예측해보세요.
              <br />
              예측 성공 여부에 따라, 경기 후 응모권이 즉시 지급됩니다.
            </p>
          </div>
          <img src={guide2} className={s.GuideImage} />
        </div>
        <div className={s.GuideContainer}>
          <div className={s.GuideHeader}>
            <div className={s.Index}>3</div>
            <h2>경품 응모하기</h2>
            <div className={s.Guide3Date}>
              <div className={s.DateText}>
                <span className={s.Token}>응모</span>
                09.30(토)~10.28(일)
              </div>
              <div className={s.DateText}>
                <span className={s.Token}>당첨자 발표</span>
                10.29(월)
              </div>
            </div>
            <p className={s.GuideDescription}>
              획득한 응모권으로 다양한 상품에 응모하세요.
              <br />
              응모할수록 당첨 확률은 더 높아집니다!
            </p>
          </div>
          <img src={guide3} className={s.GuideImage} />
          <Link to="/application" className={s.Button}>
            경품 응모 바로가기
          </Link>
        </div>
        <div className={s.GuideContainer}>
          <div className={s.GuideHeader}>
            <div className={s.Index}>4</div>
            <h2>
              출석게임으로
              <br />
              추가 응모권 받기
            </h2>
            <div className={s.DateText}>08.30(토)~09.20(토)</div>
            <p className={s.GuideDescription}>공 잡기 게임으로 매일 추가 응모권에 도전해보세요!</p>
          </div>
          {/* TODO: 출석게임 룰 추가 */}
          <Link to="/attendance" className={s.Button}>
            출석 게임 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Guide;
