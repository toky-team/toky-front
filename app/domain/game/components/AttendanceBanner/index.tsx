import banner from '@/lib/assets/images/attendance_banner.svg';
import png from '@/lib/assets/images/attendance_banner_png.png';

import * as s from './style.css';
import TicketInfo from '@/common/components/TicketInfo';
import { Link } from 'react-router';

const AttendanceBanner = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Container}>
        <div className={s.Title}>
          <img src={banner} alt="출석 GAME" className={s.ImageOn} />
          <span className={s.ImageOn}>공 잡고 응모권 받자!</span>
          <img src={png} className={s.ImageUnder} />
        </div>
      </div>
      {/* TODO: 캘린더 만들기 */}
      <div className={s.GameButtonWrapper}>
        <div className={s.TicketWrapper}>
          <p>현재까지 획득한 응모권</p>
          <TicketInfo />
        </div>
        <Link className={s.GameButton} to="/attendance/game" replace={true}>
          게임 참여하기
        </Link>
      </div>
    </div>
  );
};
export default AttendanceBanner;
