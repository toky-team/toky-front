import { BotMessageSquare } from 'lucide-react';
import * as s from './style.css';

interface Props {
  isModalOpen: boolean;
  onClose: () => void;
}
const GuideModal = ({ isModalOpen, onClose }: Props) => {
  return (
    <>
      {isModalOpen && (
        <div className={s.Backdrop}>
          <div className={s.Container}>
            <div className={s.Guide}>
              <div className={s.GuideToken}>채팅방 입장 전 잠깐!</div>
              <div className={s.GuideText}>
                <h1>
                  모두의 즐거움을 위해,
                  <br />
                  매너를 지켜서 댓글을 남겨주세요
                </h1>
                <div className={s.Description}>
                  <BotMessageSquare size={16} />
                  <p>부적절한 채팅은 ‘응원 메시지’로 교체됩니다.</p>
                </div>
              </div>
            </div>
            <button className={s.Button} onClick={onClose}>
              입장하기
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default GuideModal;
