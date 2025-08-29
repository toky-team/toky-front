import banner from '@/lib/assets/images/attendance_banner.svg';
import png from '@/lib/assets/images/attendance_banner_png.png';

import * as s from './style.css';
import TicketInfo from '@/common/components/TicketInfo';
import { useNavigate } from 'react-router';
import { useGetAttendance } from '@/domain/game/apis/useGetAttendance';
import { useGetAttendanceAll } from '@/domain/game/apis/useGetAttendanceAll';

const AttendanceBanner = () => {
  const navigate = useNavigate();
  const { data: todayAttendance, isSuccess: isTodayAttendanceSuccess } = useGetAttendance();
  const { data: attendanceData } = useGetAttendanceAll();

  const handleGameStart = () => {
    if (!isTodayAttendanceSuccess || todayAttendance.isAttended) return;
    navigate('/attendance/game', { replace: true });
  };

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
        <button
          className={s.GameButton({ disabled: !isTodayAttendanceSuccess || todayAttendance.isAttended })}
          onClick={handleGameStart}
        >
          {isTodayAttendanceSuccess ? (todayAttendance.isAttended ? '내일 다시 참여해보세요!' : '게임 참여하기') : ''}
        </button>
      </div>
    </div>
  );
};
export default AttendanceBanner;
