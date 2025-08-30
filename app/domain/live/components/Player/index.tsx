import ReactPlayer from 'react-player';

import * as s from './style.css';
interface Props {
  src: string;
}
const Player = ({ src }: Props) => {
  return (
    <div className={s.Wrapper}>
      <ReactPlayer className={s.Container} src={src} width="100%" height="100%" />
    </div>
  );
};
export default Player;
