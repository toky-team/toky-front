import { useNavigate, useLocation } from 'react-router';
import { tv, type VariantProps } from 'tailwind-variants';

const navBarVariants = tv({
  slots: {
    root: "w-full bg-[#1E1E1E]",
    container: "w-full max-w-screen-sm mx-auto",
    tabsList: "w-full flex flex-row justify-between h-12 px-5",
    tab: "flex items-center justify-center text-base font-medium transition-colors relative px-1",
    activeIndicator: "absolute bottom-0 left-0 right-0 h-0.5 rounded-t-lg bg-white-87"
  },
  variants: {
    active: {
      true: {
        tab: "text-white-87"
      },
      false: {
        tab: "text-white-disabled-38"
      }
    }
  },
  defaultVariants: {
    active: false
  }
});

interface NavBarProps extends VariantProps<typeof navBarVariants> {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", value: "home", label: "홈" },
    { path: "/prediction", value: "prediction", label: "승부예측" },
    { path: "/record", value: "record", label: "전력분석" },
    { path: "/player", value: "player", label: "선수" },
    { path: "/application", value: "application", label: "응모" },
    { path: "/ranking", value: "ranking", label: "랭킹" },
  ];

  const { root, container, tabsList, tab, activeIndicator } = navBarVariants();

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={root({ className })}>
      <div className={container()}>
        <div className={tabsList()}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.value}
                onClick={() => handleTabClick(item.path)}
                className={tab({ active: isActive })}
              >
                {item.label}
                {isActive && <div className={activeIndicator()} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;