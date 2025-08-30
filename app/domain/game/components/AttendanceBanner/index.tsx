import banner from '@/lib/assets/images/attendance_banner.svg';
import png from '@/lib/assets/images/attendance_banner_png.png';

import * as s from './style.css';
import TicketInfo from '@/common/components/TicketInfo';
import { useNavigate } from 'react-router';
import { useGetAttendance } from '@/domain/game/apis/useGetAttendance';
import { useGetAttendanceAll } from '@/domain/game/apis/useGetAttendanceAll';
import { CALENDAR_DATE } from '@/domain/game/constants';
import Icon from '@/lib/assets/icons';

const AttendanceBanner = () => {
  const navigate = useNavigate();
  const { data: todayAttendance, isSuccess: isTodayAttendanceSuccess } = useGetAttendance();
  const { data: attendanceData } = useGetAttendanceAll();

  const isDisabled = !isTodayAttendanceSuccess || todayAttendance.secondStageResult !== null;

  const handleGameStart = () => {
    if (isDisabled) return;
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
      <div className={s.CalendarWrapper}>
        {CALENDAR_DATE.map((value) => {
          const isVisible = value.isVisible;
          const isToday = isVisible && new Date(value.date).getDate() === new Date().getDate();
          const isAttended =
            isVisible &&
            attendanceData?.attendances.some(
              (attendance) =>
                new Date(attendance.attendandAt).getDate() === new Date(value.date).getDate() && attendance.isAttended,
            );
          return (
            <span
              key={value.date}
              className={s.CalendarItem({ variant: isAttended ? 'isAttended' : isToday ? 'today' : undefined })}
            >
              {isVisible && (isAttended ? <Icon.Check width={18} height={18} /> : new Date(value.date).getDate())}
            </span>
          );
        })}
      </div>
      <div className={s.GameButtonWrapper}>
        <div className={s.TicketWrapper}>
          <p>현재까지 획득한 응모권</p>
          <TicketInfo />
        </div>
        <button className={s.GameButton({ disabled: isDisabled })} onClick={handleGameStart}>
          {isTodayAttendanceSuccess
            ? todayAttendance.secondStageResult !== null
              ? '내일 다시 참여해보세요!'
              : '게임 참여하기'
            : ''}
        </button>
      </div>
    </div>
  );
};
export default AttendanceBanner;
