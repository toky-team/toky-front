import { tv } from "tailwind-variants";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface ScheduleItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

interface ScheduleCarouselProps {
  schedules: ScheduleItem[];
};

const scheduleCarouselVariants = tv({
  slots: {
    root: "w-full",
  },
});

const ScheduleCarousel = () => {
  const { root } = scheduleCarouselVariants();
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div>1</div>
        </CarouselItem>
        <CarouselItem>
          
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default ScheduleCarousel;