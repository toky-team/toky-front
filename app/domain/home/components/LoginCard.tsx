import { tv, type VariantProps } from "tailwind-variants";
import LoginButton from "./LoginButton";

const loginCardVariants = tv({
  slots: {
    root: "flex flex-row w-full p-5 justify-between items-center rounded-lg [background:var(--color-background-5)]",
    description: "flex flex-col",
  },
});

interface LoginCardProps extends VariantProps<typeof loginCardVariants> {
  className?: string;
}

const LoginCard = ({ className }: LoginCardProps) => {
  const { root, description } = loginCardVariants();
  return (
    <div className={root()}>
      <div className={description()}>
        <p>간편하게 로그인하고</p>
        <p>승부예측 참여하세요</p>
      </div>
      <LoginButton size="lg"/>
    </div>
  );
};

export default LoginCard;