import { tv } from "tailwind-variants";
import type { PlayerInterface } from "@/lib/types/player";

const primaryPlayerCardVariants = tv({
  slots: {
    card: "bg-[#121212] rounded-[10px] h-[166px] w-[130px] overflow-hidden relative cursor-pointer",
    imageContainer: "relative h-full w-full",
    playerImage: "w-full h-full object-cover",
    playerName: "absolute bottom-2 left-1/2 -translate-x-1/2 text-white-87 font-bold text-lg z-10",
    bottomBlur: "absolute bottom-0 left-0 right-0 h-[60px] rounded-b-md bg-gradient-to-t from-white/80 to-transparent",
  },
  variants: {
    team: {
      korea: {
        bottomBlur: "bg-gradient-to-b from-[#F3233C]/0 to-[#F3233C]",
      },
      yonsei: {
        bottomBlur: "bg-gradient-to-b from-[#5B84FF]/0 to-[#2948FF]",
      },
    },
  },
});

interface PrimaryPlayerCardProps {
  id: string;
  name: string;
  number: number;
  image: string;
  likes: number;
  team: "korea" | "yonsei";
  player?: PlayerInterface; // 전체 플레이어 정보 (있으면 오버레이 표시)
  onClick?: () => void; // 커스텀 클릭 핸들러
}

const PrimaryPlayerCard = ({ id, name, number, image, likes, team, player, onClick }: PrimaryPlayerCardProps) => {
  const { card, imageContainer, playerImage, playerName, bottomBlur } = primaryPlayerCardVariants();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={card()} onClick={handleClick}>
      <div className={imageContainer()}>
        <img
          src={image}
          alt={`${name} 선수`}
          className={playerImage()}
        />
        <div className={playerName()}>
          {name}
        </div>
        <div className={bottomBlur({ team })}></div>
      </div>
    </div>
  );
};

export default PrimaryPlayerCard;
