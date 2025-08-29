import * as s from './style.css';

import MainTopBar from '@/common/components/MainTopBar';
import { useGetAttendance } from '@/domain/game/apis/useGetAttendance';
import { useGetAttendanceAll } from '@/domain/game/apis/useGetAttendanceAll';
import AttendancePolicy from '@/domain/game/components/AttendancePolicy';
import AttendanceBanner from '@/domain/game/components/AttendanceBanner';

const AttendancePage = () => {
  const { data: todayAttendance } = useGetAttendance();
  const { data: attendanceData } = useGetAttendanceAll();

  // const { data: todayQuizInfo } = useGetTodayQuiz();
  // const { data: attendanceInfo, isLoading: isAttendanceLoading, refetch: refetchAttendance } = useGetMyAttendance();

  return (
    <div className={s.Container}>
      <MainTopBar />
      <AttendanceBanner />
      {/* <AttendanceBanner>
          매일매일 쏟아지는 응모권!
          <Icon.AttendanceQuizBadge />
        </AttendanceBanner>
        <AttendanceStamp>
          <Icon.AttendanceStamp />
        </AttendanceStamp>
        <AttendanceTicket>
          <Icon.AttendanceTicket />
        </AttendanceTicket> */}
      {/* {todayQuizInfo && !isAttendanceLoading && (
          <>
            <AttendanceCalendar
              attendanceHistory={attendanceInfo?.attendanceHistory ?? []}
              today={todayQuizInfo.today ?? ''}
            />
            { <DailyAttendanceQuiz
              question={todayQuizInfo.question ?? ''}
              quizId={todayQuizInfo.quizId ?? 0}
              todayAttendance={attendanceInfo?.todayAttendance ?? false}
              isMyAnswerCorrect={attendanceInfo?.isMyAnswerCorrect ?? null}
              todayAnswer={attendanceInfo?.todayAnswer ?? null}
              refetchAttendance={refetchAttendance}
            /> }
          </>
        )} */}
      <AttendancePolicy />
    </div>
  );
};
export default AttendancePage;
