import ReactPlayer from 'react-player';

import * as s from './style.css';
interface Props {
  src: string;
}
const Player = ({ src }: Props) => {
  /**
   * TODO: 에러 해결
   * 이승준 해결해줘 !!!!! ㅠㅠㅠ
   * Check the render method of `YoutubeVideoElement`.
   * See https://react.dev/link/warning-keys for more information.
   * Each child in a list should have a unique "key" prop.
   */
  return (
    <div className={s.Wrapper}>
      <ReactPlayer className={s.Container} src={src} width="100%" height="100%" />
    </div>
  );
};
export default Player;
