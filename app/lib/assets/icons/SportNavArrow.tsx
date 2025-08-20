interface Props {
  rotate?: number;
}
const SportNavArrow = ({ rotate = 0 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <mask
        id="mask0_684_3025"
        width="20"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
      >
        <path fill="#D9D9D9" d="M0 0h20v20H0z"></path>
      </mask>
      <g mask="url(#mask0_684_3025)">
        <path
          fill="#fff"
          fillOpacity="0.87"
          d="m2.958 10 6.125 6.125a.96.96 0 0 1 .302.73q-.01.416-.322.728a1 1 0 0 1-.73.313 1 1 0 0 1-.729-.313l-6.416-6.395a1.7 1.7 0 0 1-.375-.563A1.7 1.7 0 0 1 .688 10q0-.312.125-.625.124-.312.375-.563l6.416-6.416a.98.98 0 0 1 .74-.302q.426.01.74.323a1 1 0 0 1 .312.729 1 1 0 0 1-.313.729z"
        ></path>
      </g>
    </svg>
  );
};
export default SportNavArrow;
