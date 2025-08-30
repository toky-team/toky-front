import * as s from './style.css';

import MainTopBar from '@/common/components/MainTopBar';
import AttendancePolicy from '@/domain/game/components/AttendancePolicy';
import AttendanceBanner from '@/domain/game/components/AttendanceBanner';

const AttendancePage = () => {
  // const { data: todayQuizInfo } = useGetTodayQuiz();
  // const { data: attendanceInfo, isLoading: isAttendanceLoading, refetch: refetchAttendance } = useGetMyAttendance();

  return (
    <div className={s.Container}>
      <MainTopBar />
      <AttendanceBanner />
      <AttendancePolicy />
    </div>
  );
};
export default AttendancePage;
