import { tv, type VariantProps } from 'tailwind-variants';
import LoginButton from './LoginButton';
import InviteButton from './InviteButton';

const loginCardVariants = tv({
  slots: {
    root: 'flex flex-row w-full p-5 justify-between items-center rounded-lg',
    description: 'flex flex-col',
  },
  variants: {
    backgroundColor: {
      white10: {
        root: "bg-white/10",
      },
      default: {
        root: "[background:var(--color-background-5)]",
      },
    },
  },
  defaultVariants: {
    backgroundColor: 'default',
  },
});

interface LoginCardProps extends VariantProps<typeof loginCardVariants> {
  className?: string;
  isLoggedIn: boolean;
  backgroundColor?: 'white10';
}

const LoginCard = ({ className, isLoggedIn, backgroundColor }: LoginCardProps) => {
  const { root, description } = loginCardVariants();
  return (
    <div className={root({ backgroundColor })}>
      <div className={description()}>
        {!isLoggedIn && <p>간편하게 로그인하고</p>}
        {!isLoggedIn && <p>승부예측 참여하세요</p>}
        {isLoggedIn && <p>친구 초대하면</p>}
        {isLoggedIn && <p>둘다 응모권 5장</p>}
      </div>
      {!isLoggedIn && <LoginButton size="lg" />}
      {isLoggedIn && <InviteButton />}
    </div>
  );
};

export default LoginCard;
