import * as s from './style.css';

interface Props {
  nickname: string;
  message: string;
}
const Chat = ({ nickname, message }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.Nickname}>{nickname}</div>
      <div className={s.Message}>{message}</div>
    </div>
  );
};
export default Chat;
