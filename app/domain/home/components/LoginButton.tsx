import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import useLogout from '@/common/apis/useLogout';
import { useNavigate } from 'react-router';
import { tv, type VariantProps } from 'tailwind-variants';

const loginButtonVariants = tv({
  base: [
    'flex items-center justify-center',
    'w-12 h-6 rounded-md',
    'bg-[#4C0EB0] text-white',
    'text-xs font-bold leading-normal tracking-tight',
    'cursor-pointer transition-colors',
    'hover:bg-[#5C1EC0] active:bg-[#3C0E90]',
  ],
  variants: {
    size: {
      default: 'w-12 h-6 text-xs',
      sm: 'w-10 h-5 text-[10px]',
      lg: 'w-18 h-9 text-sm',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface LoginButtonProps extends VariantProps<typeof loginButtonVariants> {
  className?: string;
}

const LoginButton = ({ size, className }: LoginButtonProps) => {
  const navigate = useNavigate();
  const { data: authCheck, isSuccess } = useGetAuthCheck();
  const { mutate: logout } = useLogout();

  const handleClick = () => {
    if (isSuccess && authCheck.isLogin && !authCheck.isSignup) {
      logout(undefined, {
        onSuccess: () => navigate('/login'),
      });
      return;
    }

    navigate('/login');
  };

  return (
    <button className={loginButtonVariants({ size, className })} onClick={handleClick}>
      로그인
    </button>
  );
};

export default LoginButton;
