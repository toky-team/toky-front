import { tv, type VariantProps } from "tailwind-variants";
import ActionButton from "./ActionButton";
import Icon from "@/lib/assets/icons";

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
      <ActionButton image={<Icon.Prediction />} description="승부예측" link="/prediction" />
      <ActionButton image={<Icon.Record />} description="전력분석" link="/record" />
      <ActionButton image={<Icon.Attendance />} description="출석게임" link="/attendance" />
      <ActionButton image={<Icon.Application />} description="경품응모" link="/application" />
    </div>
  );
};

export default ActionCard;