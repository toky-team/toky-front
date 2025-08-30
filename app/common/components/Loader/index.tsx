import * as s from './style.css';

interface Props {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextRef: React.RefObject<HTMLDivElement | null>;
}

const Loader = ({ hasNextPage, isFetchingNextPage, fetchNextRef }: Props) => {
  if (!hasNextPage) return null;

  if (isFetchingNextPage)
    return (
      <div className={s.LoadingWrapper}>
        <div className={s.LoadingSpinner} />
      </div>
    );

  return <div className={s.Trigger} ref={fetchNextRef} />;
};
export default Loader;
