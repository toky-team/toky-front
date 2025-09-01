import NavBar from '@/common/components/NavBar';
import * as s from './style.css';
import MainTopBar from '@/common/components/MainTopBar';
import Icon from '@/lib/assets/icons';
import draw_text from '@/lib/assets/images/draw_text.webp';
import DrawTicketInfo from '@/domain/ticket/components/DrawTicketInfo';
import { DrawCard } from '@/domain/ticket/components/DrawCard';
import { useGetGift } from '@/domain/ticket/apis/useGetGift';
import useGetTicketCount from '@/common/apis/useGetTicketCount';
import draw_instruction from '@/lib/assets/images/draw_instruction.webp';

const DrawPage = () => {
  const { data: giftList } = useGetGift();
  const { data: ticketCount } = useGetTicketCount();

  const scrollToBottom = async () => {
    await window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

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
            <button className={s.InfoText} onClick={scrollToBottom}>
              <Icon.QuestionMark />
              응모권은 어떻게 받을 수 있나요?
            </button>
          </div>
        </div>
        <div className={s.DrawCards}>
          {giftList?.map((gift) => (
            <DrawCard
              key={gift.id}
              id={gift.id}
              imgUrl={gift.imageUrl}
              productName={gift.name}
              totalDraw={gift.drawCount}
              canDraw={gift.requiredTicket <= (ticketCount ?? 0)}
              productAlias={gift.alias}
            />
          ))}
        </div>
      </div>
      <img className={s.Instruction} src={draw_instruction} alt="draw page instruction" />
    </div>
  );
};
export default DrawPage;
