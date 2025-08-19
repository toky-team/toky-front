import { tv, type VariantProps } from "tailwind-variants";
import ActionButton from "./ActionButton";

const actionCardVariants = tv({
  slots: {
    root: "w-full flex flex-row px-3 justify-between",
  },
});

interface ActionCardProps extends VariantProps<typeof actionCardVariants> {
  className?: string;
}

const ActionCard = ({ className }: ActionCardProps) => {
  const { root } = actionCardVariants();
  return (
    <div className={root({ className })}>
      <ActionButton description="승부예측" link="/prediction" />
      <ActionButton description="전력분석" link="/record" />
      <ActionButton description="출석퀴즈" link="/quiz" />
      <ActionButton description="경품응모" link="/application" />
    </div>
  );
};

export default ActionCard;