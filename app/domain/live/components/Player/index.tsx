import ReactPlayer from 'react-player';

const Player = () => {
  return (
    <ReactPlayer
      src="https://www.youtube.com/watch?v=OuRZge0MNEg"
      playing={true}
      style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '16/9',
      }}
    />
  );
};
export default Player;
