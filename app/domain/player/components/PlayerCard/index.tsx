import { tv } from "tailwind-variants";
import Icon from "@/lib/assets/icons";

const playerCardVariants = tv({
  slots: {
    card: "bg-white rounded-md overflow-hidden relative shadow-sm",
    imageContainer: "relative aspect-[4/5] bg-white",
    playerImage: "w-full h-full object-cover",
    numberBadge: "absolute top-2 left-2 text-xl font-normal max-w-11 text-center",
    playerName: "absolute top-8 left-2 text-[#121212] font-bold text-base",
    bottomHalfBlur: "absolute bottom-0 left-0 right-0 h-1/2 rounded-b-md bg-gradient-to-t from-white/80 to-transparent",
    likeContainer: "absolute bottom-1 left-1 right-1 flex items-center justify-between bg-gradient-to-r from-black/14 to-black text-white py-1.5 px-3 rounded-md",
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
}

const PlayerCard = ({ id, name, number, image, likes, team }: PlayerCardProps) => {
  const { card, imageContainer, playerImage, numberBadge, playerName, bottomHalfBlur, likeContainer, likeCount, heartIcon } = playerCardVariants();

  return (
    <div className={card()}>
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
          {name}
        </div>
        <div className={bottomHalfBlur()}></div>
        <div className={likeContainer()}>
          <div className={heartIcon()}>
            <Icon.Heart />
          </div>
          <span className={likeCount()}>
            {likes.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
