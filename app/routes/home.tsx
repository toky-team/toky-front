import CustomCarousel from '@/common/components/CustomCarousel';
import MainTopBar from '@/common/components/MainTopBar';
import NavBar from '@/common/components/NavBar';
import TestButton from '@/common/components/TestButton';
import ActionCard from '@/domain/home/components/ActionCard';
import LoginCard from '@/domain/home/components/LoginCard';

export default function Home() {
  // 임시 슬라이드 데이터 (실제 이미지로 교체 예정)
  const tempSlides = [
    { id: '1', image: "https://placehold.co/600x200", alt: '슬라이드 1' },
    { id: '2', image: "https://placehold.co/600x200", alt: '슬라이드 2' },
    { id: '3', image: "https://placehold.co/600x200", alt: '슬라이드 3' }
  ];

  return (
    <div>
      <MainTopBar />
      <NavBar />
      <CustomCarousel slides={tempSlides} />
      <div className="flex flex-col items-center justify-center gap-8 px-5 py-8">
        <LoginCard />
        <ActionCard />
      </div>
      <TestButton />
    </div>
  );
}
