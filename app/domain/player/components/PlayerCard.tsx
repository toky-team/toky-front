import { tv } from "tailwind-variants";
import { useState } from "react";
import Icon from "@/lib/assets/icons";
import { usePostPlayerLike } from "@/common/apis/usePostPlayerLike";
import type { PlayerInterface } from "@/lib/types/player";

const playerCardVariants = tv({
  slots: {
    card: "bg-white rounded-md overflow-hidden relative shadow-sm cursor-pointer transition-shadow",
    imageContainer: "relative aspect-[4/5] bg-white",
    playerImage: "w-full h-full object-cover object-[-150%_center]",
    numberBadge: "absolute top-2 left-2 text-xl font-normal max-w-11 text-center font-giants-bold",
    playerName: "absolute top-[34px] left-2 text-[#121212] font-bold text-base whitespace-pre-wrap leading-[1.3]",
    bottomHalfBlur: "absolute bottom-0 left-0 right-0 h-1/2 rounded-b-md bg-gradient-to-t from-white/80 to-transparent",
    likeContainer: "absolute bottom-1 left-1 right-1 flex items-center justify-between bg-[#333333] text-white py-1.5 px-3 rounded-md",
    likeCount: "text-sm font-medium",
    heartIcon: "w-4 h-4 text-red-500 [&>svg]:w-4 [&>svg]:h-4",
  },
  variants: {
    team: {
      korea: {
        numberBadge: "text-light-red",
      },
      yonsei: {
        numberBadge: "text-light-blue",
      },
    },
  },
});

interface PlayerCardProps {
  id: string;
  name: string;
  number: number;
  image: string;
  likes: number;
  team: "korea" | "yonsei";
  player?: PlayerInterface;
  onClick?: () => void;
}

const PlayerCard = ({ id, name, number, image, likes, team, player, onClick }: PlayerCardProps) => {
  const { card, imageContainer, playerImage, numberBadge, playerName, bottomHalfBlur, likeContainer, likeCount, heartIcon } = playerCardVariants();
  
  const [currentLikes, setCurrentLikes] = useState(likes);
  
  const { mutate: postPlayerLike, isPending } = usePostPlayerLike();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isPending) return;
    
    const originalLikes = currentLikes;
    setCurrentLikes(currentLikes + 1);
    
    postPlayerLike(id, {
      onSuccess: (playerData) => {
        setCurrentLikes(playerData.likeCount);
      },
      onError: (error) => {
        setCurrentLikes(originalLikes);
      }
    });
  };

  return (
    <div className={card()} onClick={handleClick}>
      <div className={imageContainer()}>
        <img
          src={image}
          alt={`${name} 선수`}
          className={playerImage()}
        />
        <div className={numberBadge({ team })}>
          {number}
        </div>
        <div className={playerName()}>
          {name.length === 4 ? name.slice(0, 2) + "\n" + name.slice(2) : name.length === 5 ? name.slice(0, 2) + "\n" + name.slice(3) : name.length === 6 ? name.slice(0, 3) + "\n" + name.slice(3) : name}
        </div>
        <div className={bottomHalfBlur()}></div>
        <div className={likeContainer()}>
          <button 
            className={heartIcon()}
            onClick={handleHeartClick}
            disabled={isPending}
          >
            <Icon.Heart />
          </button>
          <span className={likeCount()}>
            {currentLikes.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
