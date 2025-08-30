import { tv } from "tailwind-variants"
import type { PlayerInterface } from "@/lib/types/player";
import PrimaryPlayerCard from "./PrimaryPlayerCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { usePlayerOverlay } from "../hooks/usePlayerOverlay";

const primaryPlayerViewVariants = tv({
  slots: {
    root: "w-full max-w-screen-sm mx-auto flex flex-col gap-5 px-4",
    title: "text-base font-bold text-white",
    carousel: "w-full",
  },
});

const PrimaryPlayerView = ({ primaryPlayers }: { primaryPlayers: PlayerInterface[] }) => {
  const { root, title, carousel } = primaryPlayerViewVariants();
  const { openPlayerOverlay } = usePlayerOverlay();
  
  const handlePlayerClick = (player: PlayerInterface) => {
    openPlayerOverlay(player);
  };

  return (
    <div className={root()}>
      <div className={title()}>
        국내/해외 대회 출전선수
      </div>
      <Carousel 
        className={carousel()}
        opts={{
          align: "start",
          dragFree: true,
          containScroll: "trimSnaps"
        }}
      >
        <CarouselContent className="ml-0">
          {primaryPlayers.map((player) => (
            <CarouselItem key={player.id} className="basis-[130px] pl-0 mr-3">
              <PrimaryPlayerCard
                id={player.id}
                name={player.name}
                number={player.backNumber}
                image={player.imageUrl}
                likes={player.likeCount}
                team={player.university === "고려대학교" ? "korea" : "yonsei"}
                player={player}
                onClick={() => handlePlayerClick(player)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default PrimaryPlayerView