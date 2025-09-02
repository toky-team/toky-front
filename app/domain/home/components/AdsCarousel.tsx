import { tv } from "tailwind-variants";
import CustomCarousel from "@/common/components/CustomCarousel";
import BannerKopas from "@/lib/assets/images/banner_kopas.webp";
import BannerSofo from "@/lib/assets/images/banner_sofo.webp";

const adsCarouselVariants = tv({
  slots: {
    root: "w-full rounded-[10px]",
  },
});

const AdsCarousel = () => {
  const { root } = adsCarouselVariants();
  return <CustomCarousel slides={[
    {
      id: "1",
      image: BannerKopas,
    },
    {
      id: "2",
      image: BannerSofo,
    },
  ]} size="small" indicator="dots" className={root()} />;
};

export default AdsCarousel;