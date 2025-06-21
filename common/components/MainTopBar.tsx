'use client';

import Icon from '@/assets/icons';
import KakaoLogin from '@/common/components/KakaoLogin';
import Link from 'next/link';

const MainTopBar = () => {
  return (
    <div className="bg-bg-0 flex h-[2.875rem] w-full flex-row items-center justify-between px-5 py-2.5">
      <Link href={'/'}>
        <Icon.TokyLogo />
      </Link>
      <div className="flex shrink-0 flex-row items-center gap-3">
        {<KakaoLogin />}
        {/* TODO: Sidebar 구현 */}
      </div>
    </div>
  );
};
export default MainTopBar;
