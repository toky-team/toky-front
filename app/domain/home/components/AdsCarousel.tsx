import { tv } from 'tailwind-variants';
import CustomCarousel from '@/common/components/CustomCarousel';
import BannerKopas from '@/lib/assets/images/banner_kopas.webp';
import BannerSofo from '@/lib/assets/images/banner_sofo.webp';
import BannerSportsKu from '@/lib/assets/images/banner_sportsku.webp';
import BannerSisboombah from '@/lib/assets/images/banner_sisboombah.webp';

const adsCarouselVariants = tv({
  slots: {
    root: 'w-full rounded-[10px]',
  },
});

const AdsCarousel = () => {
  const { root } = adsCarouselVariants();
  return (
    <CustomCarousel
      slides={[
        {
          id: '1',
          image: BannerKopas,
          link: 'https://www.koreapas.com',
        },
        {
          id: '2',
          image: BannerSofo,
          link: 'https://www.koreapas.com/m/sofo_result.php',
        },
        {
          id: '3',
          image: BannerSportsKu,
          link: 'https://blog.naver.com/sportsku',
        },
        {
          id: '4',
          image: BannerSisboombah,
          link: 'https://m.blog.naver.com/sis_boom_bah/223941242297?referrerCode=1',
        },
      ]}
      size="small"
      indicator="dots"
      autoPlay={true}
      className={root()}
    />
  );
};

export default AdsCarousel;
