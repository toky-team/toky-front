import NavBar from '@/common/components/NavBar';
import * as s from './style.css';
import MainTopBar from '@/common/components/MainTopBar';
import Icon from '@/lib/assets/icons';
import draw_text from '@/lib/assets/images/draw_text.webp';
import DrawTicketInfo from '@/domain/ticket/components/DrawTicketInfo';

const DrawPage = () => {
  return (
    <div className={s.Container}>
      <MainTopBar />
      <NavBar />
      <div className={s.GradientContainer}>
        <div className={s.Header}>
          <div className={s.HeaderTitle}>
            2025 토키 경품응모
            <img src={draw_text} alt="여러번 응모할수록, 높아지는 당첨확률!" />
          </div>
          <div className={s.InfoContainer}>
            <DrawTicketInfo />
            <div className={s.InfoText}>
              <Icon.QuestionMark />
              응모권은 어떻게 받을 수 있나요?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DrawPage;
