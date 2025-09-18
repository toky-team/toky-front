import { tv } from "tailwind-variants";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ScheduleCard } from "./ScheduleCard";
import Reels from "@/lib/assets/images/reels_background.png"
import Baseball from "@/lib/assets/images/baseball_background.png"
import Basketball from "@/lib/assets/images/basketball_background.png"
import Rugby from "@/lib/assets/images/rugby_background.png"
import IceHockey from "@/lib/assets/images/icehockey_background.png"
import Soccer from "@/lib/assets/images/soccer_background.png"
import { SCHEDULE_LIST } from '@/lib/constants';

interface ScheduleEventWithImage {
  title: string;
  time: string;
  location: string;
  img: string;
  date: string;
}

const scheduleCarouselVariants = tv({
  slots: {
    root: "w-full",
    dateSection: "flex flex-col gap-4 w-full",
    date: "flex items-center justify-center text-sm bg-[#363636] font-bold text-white-87 h-[30px] w-[88px] rounded-[8px] ", // 고정 높이
    dateInvisible: "flex items-center justify-center font-bold text-white-87 h-[30px] invisible", // 같은 높이의 투명 공간
    flex: "flex gap-3 overflow-x-auto scrollbar-hide",
  },
});

const IMAGE_MAP: Record<string, string> = {
  '합동응원전': Reels,
  '야구': Baseball,
  '아이스하키': IceHockey,
  '농구': Basketball,
  '럭비': Rugby,
  '축구': Soccer,
};

const SCHEDULE_INFO: Record<string, ScheduleEventWithImage[]> = SCHEDULE_LIST.reduce((acc, item) => {
  const dateKey = item.date;
  const img = IMAGE_MAP[item.title] ?? Reels;
  const entry: ScheduleEventWithImage = { title: item.title, time: item.time, location: item.location, img, date: item.date };
  if (!acc[dateKey]) acc[dateKey] = [entry]; else acc[dateKey].push(entry);
  return acc;
}, {} as Record<string, ScheduleEventWithImage[]>);

const ScheduleCarousel = () => {
  const { root, date, dateInvisible } = scheduleCarouselVariants();
  
  // 모든 이벤트를 플랫하게 만들되, 날짜 정보도 포함
  const flattenedEvents = Object.entries(SCHEDULE_INFO).flatMap(([_dateKey, events], _dateIndex) =>
    events.map((event, eventIndex) => ({
      ...event,
      isFirstOfDate: eventIndex === 0,
    }))
  );
  
  return (
    <Carousel 
      className={root()}
      opts={{
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps"
      }}
    >
      <CarouselContent className="ml-0">
        {flattenedEvents.map((event, index) => (
          <CarouselItem key={`${event.date}-${event.title}-${index}`} className="basis-[164px] pl-0">
            <div className="flex flex-col gap-2">
              {event.isFirstOfDate ? (
                <div className={date()}>{event.date}</div>
              ) : (
                <div className={dateInvisible()}>placeholder</div>
              )}
              <ScheduleCard
                title={event.title}
                time={event.time}
                location={event.location}
                backgroundImage={event.img}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ScheduleCarousel;