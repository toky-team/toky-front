import { tv, type VariantProps } from "tailwind-variants";
import LoginButton from "./LoginButton";
import InviteButton from "./InviteButton";

const loginCardVariants = tv({
  slots: {
    root: "flex flex-row w-full p-5 justify-between items-center rounded-lg [background:var(--color-background-5)]",
    description: "flex flex-col",
  },
});

interface LoginCardProps extends VariantProps<typeof loginCardVariants> {
  className?: string;
  isLoggedIn: boolean;
}

const LoginCard = ({ className, isLoggedIn }: LoginCardProps) => {
  const { root, description } = loginCardVariants();
  return (
    <div className={root()}>
      <div className={description()}>
        {!isLoggedIn && <p>간편하게 로그인하고</p>}
        {!isLoggedIn && <p>승부예측 참여하세요</p>}
        {isLoggedIn && <p>친구 초대하면</p>}
        {isLoggedIn && <p>둘다 응모권 1장</p>}
      </div>
      {!isLoggedIn && <LoginButton size="lg"/>}
      {isLoggedIn && <InviteButton />}
    </div>
  );
};

export default LoginCard;