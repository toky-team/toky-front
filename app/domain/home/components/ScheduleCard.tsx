import { tv, type VariantProps } from "tailwind-variants";

const scheduleCardVariants = tv({
  slots: {
    card: "relative w-[152px] h-24 flex flex-col items-start rounded-[10px] mr-3 p-3 px-4 bg-[#1E1E1E] overflow-hidden",
    backgroundImage: "absolute -top-0.5 left-0 w-[152px] h-24 object-cover",
    cardContent: "flex flex-col items-start gap-[5px] self-stretch relative z-10",
    time: "self-stretch text-white-87 font-bold text-sm leading-[1.5] tracking-[-0.56px] z-10",
    contentDetails: "flex flex-col items-start gap-0.5 self-stretch z-10",
    title: "self-stretch text-white-87 font-bold text-base leading-[1.5] tracking-[-0.64px]",
    location: "self-stretch text-white/60 text-[13px] font-normal leading-normal tracking-[-0.52px]",
  },
});

interface ScheduleCardProps extends VariantProps<typeof scheduleCardVariants> {
  title: string;
  time: string;
  location: string;
  backgroundImage: string;
  className?: string;
}

export function ScheduleCard({ title, time, location, backgroundImage, className }: ScheduleCardProps) {
  const { card, backgroundImage: bgImageClass, cardContent, time: timeClass, contentDetails, title: titleClass, location: locationClass } = scheduleCardVariants();
  
  return (
    <div className={card({ className })}>
      <img src={backgroundImage} className={bgImageClass()} alt="" />
      <div className={cardContent()}>
        <div className={timeClass()}>{time}</div>
        <div className={contentDetails()}>
          <div className={titleClass()}>{title}</div>
          <div className={locationClass()}>{location}</div>
        </div>
      </div>
    </div>
  );
}