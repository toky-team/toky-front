import { tv } from "tailwind-variants";
import type { PlayerInterface } from "@/lib/types/player";
import Korjpn2023 from "@/lib/assets/icons/badge/Korjpn2023";
import Korjpn2024 from "@/lib/assets/icons/badge/Korjpn2024";
import Korjpn2025 from "@/lib/assets/icons/badge/Korjpn2025";
import MostScore2024 from "@/lib/assets/icons/badge/MostScore2024";
import FibaAsiacup from "@/lib/assets/icons/badge/FibaAsiacup";
import UnivMvp from "@/lib/assets/icons/badge/UnivMvp";
import UnivFreshman from "@/lib/assets/icons/badge/UnivFreshman";
import Avg3rd from "@/lib/assets/icons/badge/Avg3rd";
import Steal from "@/lib/assets/icons/badge/Steal";
import Torino from "@/lib/assets/icons/badge/Torino";
import Iihf from "@/lib/assets/icons/badge/Iihf";

const primaryPlayerCardVariants = tv({
  slots: {
    card: "bg-[#121212] rounded-[10px] h-[166px] w-[130px] overflow-hidden relative cursor-pointer",
    imageContainer: "relative h-full w-full",
    playerImage: "w-full h-full object-cover",
    playerName: "absolute bottom-2 left-1/2 -translate-x-1/2 text-white-87 font-bold text-lg z-10",
    bottomBlur: "absolute bottom-0 left-0 right-0 h-[60px] rounded-b-md bg-gradient-to-t from-white/80 to-transparent",
    careerContainer: "absolute top-[7px] left-[5px] flex flex-col gap-1",
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
  const { card, imageContainer, playerImage, playerName, bottomBlur, careerContainer } = primaryPlayerCardVariants();

  const careerBadgeMap: Record<string, React.FC> = {
    "2025 한일 농구대회 국가대표": Korjpn2025,
    "2024 한일 농구대회 국가대표": Korjpn2024,
    "2025 한일대학정기전 국가대표": Korjpn2025,
    "2024 한일대학정기전 국가대표": Korjpn2024,
    "2023 한일대학정기전 국가대표": Korjpn2023,
    "2024 정기전 최다득점자": MostScore2024,
    "FIBA 아시아컵 남자농구 국가대표": FibaAsiacup,
    "2024 대학농구리그 챔피언전 MVP": UnivMvp,
    "FIBA 아시아컵 3X3 국가대표": FibaAsiacup,
    "58회 대통령기 전국대학야구 도루상": Steal,
    "제78회 전국대학야구선수권대회 타격 3위": Avg3rd,
    "토리노 동계세계대학경기대회 국가대표": Torino,
  };

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
      <div className={careerContainer()}>
        {player?.careers.map((career) => {
          const Badge = careerBadgeMap[career];
          return Badge ? <Badge key={career} /> : null;
        })}
      </div>
    </div>
  );
};

export default PrimaryPlayerCard;
