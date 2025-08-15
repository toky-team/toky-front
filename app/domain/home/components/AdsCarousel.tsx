import { tv } from "tailwind-variants";
import CustomCarousel from "@/common/components/CustomCarousel";

const adsCarouselVariants = tv({
  slots: {
    root: "w-full",
  },
});

const AdsCarousel = () => {
  const { root } = adsCarouselVariants();
  return <CustomCarousel slides={[
    {
      id: "1",
      image: "https://placehold.co/600x200",
    },
    {
      id: "2",
      image: "https://placehold.co/600x200",
    },
    {
      id: "3",
      image: "https://placehold.co/600x200",
    },
  ]} size="small" indicator="dots" className={root()} />;
};

export default AdsCarousel;