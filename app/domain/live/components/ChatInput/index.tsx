import { useState } from 'react';

import * as s from './style.css';
import CheerUp from '@/domain/live/components/CheerUp';

interface Props {
  handleSendMessage: (message: string) => void;
}
const ChatInput = ({ handleSendMessage }: Props) => {
  const [input, setInput] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      handleSendMessage(trimmedInput);
      setInput('');
    }
  };

  return (
    <form className={s.Wrapper} onSubmit={onSubmit}>
      <input
        className={s.Container}
        placeholder="실시간 대화에 참여해보세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <CheerUp />
    </form>
  );
};
export default ChatInput;
