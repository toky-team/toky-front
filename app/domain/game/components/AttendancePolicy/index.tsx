import * as s from './style.css';

const AttendancePolicy = () => {
  return (
    <div className={s.Container}>
      <div className={s.Item}>
        <h2 className={s.Title}>참여 기간</h2>
        <p>2024.08.30 (토) - 2024.09.20 (토)</p>
      </div>
      <div className={s.Item}>
        <h2 className={s.Title}>참여 방법</h2>
        <div className={s.DescriptionWrapper}>
          <div className={s.TextWrapper}>
            <span className={s.Index}>1</span>
            <p className={s.Text}>출석게임 메뉴에서 공 잡기 게임 참여하기</p>
          </div>
          <div className={s.TextWrapper}>
            <span className={s.Index}>2</span>
            <span className={s.Index2Wrapper}>
              <p className={s.Text}>
                1단계 성공시 1장, <br />
                2단계 성공시 1장 추가 지급!
              </p>
              <p className={s.Description}>*1단계에서 실패자에 한해, 공유시 한 번의 추가 기회를!</p>
            </span>
          </div>
          <div className={s.TextWrapper}>
            <span className={s.Index}>3</span>
            <p className={s.Text}>경품응모 메뉴에서 원하는 경품에 응모하기</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AttendancePolicy;
