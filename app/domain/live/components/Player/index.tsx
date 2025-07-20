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
    <ReactPlayer
      className={s.Container}
      src={src}
      style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '16/9',
      }}
    />
  );
};
export default Player;
