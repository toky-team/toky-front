import { tv } from "tailwind-variants";

interface RecordSportDetailProps {
  sport: string;
}

const container = tv({
  base: "w-full max-w-screen-sm mx-auto px-5 flex-1 flex flex-col",
});

const RecordSportDetail = ({ sport }: RecordSportDetailProps) => {
  return (
    <div className={container()}>
      <p className="text-xl font-semibold">{sport} 전력분석</p>
    </div>
  );
};

export default RecordSportDetail; 