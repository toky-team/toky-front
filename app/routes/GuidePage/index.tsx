import TopBar from '@/common/components/TopBar';
import guideImage from '@/lib/assets/images/guide_banner.webp';

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
          <div className={s.Index}>1</div>
        </div>
      </div>
    </div>
  );
};
export default Guide;
