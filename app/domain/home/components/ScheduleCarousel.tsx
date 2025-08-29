import React from "react";
import { tv } from "tailwind-variants";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ScheduleCard } from "./ScheduleCard";

interface ScheduleEvent {
  title: string;
  time: string;
  location: string;
  img: string;
}

const scheduleCarouselVariants = tv({
  slots: {
    root: "w-full",
    dateSection: "flex flex-col gap-4 w-full",
    date: "flex items-center justify-center text-sm bg-[#363636] font-bold text-white-87 h-7 w-[88px] rounded-[8px] ", // 고정 높이
    dateInvisible: "flex items-center justify-center font-bold text-white-87 h-7 invisible", // 같은 높이의 투명 공간
    flex: "flex gap-3 overflow-x-auto scrollbar-hide",
  },
});

const SCHEDULE_INFO: Record<string, ScheduleEvent[]> = {
  "9/12 (금)": [
    {
      title: "합동응원전",
      time: "18:00",
      location: "연세대학교 노천극장",
      img: "/images/schedule/1.png",
    },
  ],
  "9/19 (금)": [
    {
      title: "야구",
      time: "11:00", 
      location: "잠실 야구장",
      img: "/images/schedule/2.png",
    },
    {
      title: "빙구", 
      time: "14:00",
      location: "목동 아이스링크",
      img: "/images/schedule/3.png",
    },
    {
      title: "농구",
      time: "17:00",
      location: "고양 체육관", 
      img: "/images/schedule/4.png",
    },
  ],
  "9/20 (토)": [
    {
      title: "럭비",
      time: "11:00",
      location: "고양 종합운동장",
      img: "/images/schedule/5.png",
    },
    {
      title: "축구",
      time: "14:00", 
      location: "고양 종합운동장",
      img: "/images/schedule/6.png",
    },
  ],
};

const ScheduleCarousel = () => {
  const { root, date, dateInvisible } = scheduleCarouselVariants();
  
  // 모든 이벤트를 플랫하게 만들되, 날짜 정보도 포함
  const flattenedEvents = Object.entries(SCHEDULE_INFO).flatMap(([dateKey, events], dateIndex) =>
    events.map((event, eventIndex) => ({
      ...event,
      date: dateKey,
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