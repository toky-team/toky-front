import { useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'motion/react';
import { useToast } from '@/common/hooks/useToast';

import * as s from './style.css';

import Icon from '@/lib/assets/icons';
import { usePostDraw } from '@/domain/ticket/apis/usePostDraw';
import { useNeedTicketModal } from '@/domain/ticket/hooks/useNeedTicketModal';
import { useLoginModal } from '@/common/hooks/useLoginModal';

interface DrawCardProps {
  id: string;
  totalDraw: number;
  productName: string;
  productAlias?: string;
  canDraw: boolean;
  imgUrl: string;
  isDone?: boolean;
}

export function DrawCard({ id, totalDraw, productName, productAlias, canDraw, imgUrl, isDone = false }: DrawCardProps) {
  const [isClicked, setIsClicked] = useState(false);
  const { openToast } = useToast();
  const { openLoginModal } = useLoginModal();
  const { openNeedTicketModal } = useNeedTicketModal();
  const { mutate: draw } = usePostDraw(id);
  const ticketControls = useAnimation();

  const displayProductName = productName?.replaceAll('\\n', '\n') ?? '';

  async function ticketAnimation() {
    await ticketControls.start({
      y: -34,
      opacity: 0,
      transition: { duration: 0.3 },
    });
    await ticketControls.set({ y: 0 });
    await ticketControls.start({
      opacity: 1,
      transition: { duration: 0.3 },
    });
  }

  function drawSuccess() {
    openToast({ message: `${productAlias ?? productName} 응모 완료!` });
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  }

  const handleClick = async () => {
    if (isDone) {
      openToast({ message: '응모 기간이 지났어요!' });
      return;
    }
    if (openLoginModal() !== false) return;

    if (!canDraw) {
      openNeedTicketModal();
      return;
    }
    setIsClicked(true);
    ticketAnimation();
    draw(undefined, { onSuccess: drawSuccess });
  };

  return (
    <div className={s.wrapper}>
      <img className={s.productImage} src={imgUrl} alt="draw-card" width={169} height={172} />
      <div className={s.drawBoard}>
        현재&nbsp;<span className={s.drawBoardSpan}>{totalDraw}장</span>&nbsp;응모
      </div>
      <h5 className={s.productName}>{displayProductName}</h5>
      <motion.button
        className={s.drawButton({ isDone })}
        onClick={handleClick}
        initial={{ width: '100%' }}
        animate={{ width: isClicked ? '93%' : '100%' }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence>
          {isClicked && (
            <motion.div
              className={s.wave}
              initial={{ width: '100%', height: 46, opacity: 1 }}
              animate={{ width: '113%', height: 66, opacity: 0 }}
              transition={{ duration: 0.2, opacity: { duration: 0.2, delay: 0.1 } }}
            />
          )}
        </AnimatePresence>
        <motion.div initial={{ y: 0, opacity: 1 }} animate={ticketControls}>
          <Icon.Ticket width="22" height="22" />
        </motion.div>
        1장 응모
      </motion.button>
    </div>
  );
}
