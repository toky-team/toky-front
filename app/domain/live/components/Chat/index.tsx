import type { UniversityType } from '@/lib/types';
import * as s from './style.css';

interface Props {
  nickname: string;
  message: string;
  university: UniversityType;
}
const Chat = ({ nickname, message, university }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.Nickname({ university })}>{nickname}</div>
      <div className={s.Message}>{message}</div>
    </div>
  );
};
export default Chat;
