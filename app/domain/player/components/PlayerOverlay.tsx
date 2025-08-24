import { tv } from "tailwind-variants";
import Icon from "@/lib/assets/icons";
import type { PlayerInterface } from "@/lib/types/player";

const overlayVariants = tv({
  slots: {
    container: "fixed inset-0 z-50 bg-[#121212] w-full h-full overflow-auto transform transition-all duration-300",
    topBar: "absolute top-0 left-0 right-0 z-20 flex items-center justify-between h-14 px-5 py-3 bg-gradient-to-b from-black/70 via-black/30 to-transparent",
    backButton: "flex items-center justify-center w-6 h-6 text-white",
    hamburgerButton: "flex items-center justify-center w-6 h-6 text-white",
    header: "relative",
    imageContainer: "relative h-[60vh] bg-gray-100",
    playerImage: "w-full h-full object-cover",
    numberBadge: "absolute top-20 left-4 text-2xl font-bold text-white bg-black/50 rounded-lg px-2 py-1",
    playerInfo: "absolute bottom-4 left-4 space-y-1",
    playerName: "text-white text-xl font-bold bg-black/50 rounded-lg px-3 py-1 inline-block",
    universityName: "text-white text-sm bg-black/50 rounded-lg px-3 py-1 inline-block",
    content: "p-6 space-y-6 pb-8",
    likeSection: "flex items-center justify-between p-4 bg-gray-800/50 rounded-lg",
    likeContainer: "flex items-center gap-2",
    heartIcon: "w-5 h-5 text-red-500",
    likeCount: "text-lg font-semibold text-white",
    sectionTitle: "text-lg font-bold text-white mb-4",
    sectionCard: "flex flex-col gap-3 bg-gray-800/50 rounded-lg p-4 ",
    infoRow: "flex items-center",
    infoLabel: "text-sm text-gray-300 font-medium w-20 flex-shrink-0",
    infoValue: "text-base font-semibold text-white flex-1",
    careersSection: "gap-3",
    careerItem: "text-sm text-white",
  },
  variants: {
    isOpen: {
      true: {
        container: "translate-x-0 opacity-100",
      },
      false: {
        container: "translate-x-full opacity-0 pointer-events-none",
      },
    },
    team: {
      korea: {
        numberBadge: "bg-red-600/80",
      },
      yonsei: {
        numberBadge: "bg-blue-600/80",
      },
    },
  },
});

interface PlayerOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  player: PlayerInterface;
}

const PlayerOverlay = ({ isOpen, onClose, player }: PlayerOverlayProps) => {
  const {
    container,
    topBar,
    backButton,
    hamburgerButton,
    header,
    imageContainer,
    playerImage,
    numberBadge,
    playerInfo,
    playerName,
    universityName,
    content,
    likeSection,
    likeContainer,
    heartIcon,
    likeCount,
    sectionTitle,
    sectionCard,
    infoRow,
    infoLabel,
    infoValue,
    careersSection,
    careerItem,
  } = overlayVariants({
    isOpen,
    team: player.university === "고려대학교" ? "korea" : "yonsei",
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <div className={container()}>
        {/* Top Navigation Bar */}
        <div className={topBar()}>
          <button className={backButton()} onClick={onClose}>
            <Icon.ArrowBack />
          </button>
          <button className={hamburgerButton()}>
            <Icon.Hamburger />
          </button>
        </div>

        <div className={header()}>
          <div className={imageContainer()}>
            <img
              src={player.imageUrl}
              alt={`${player.name} 선수`}
              className={playerImage()}
            />
            <div className={numberBadge()}>
              {player.backNumber}
            </div>
            <div className={playerInfo()}>
              <div className={playerName()}>
                {player.name}
              </div>
              <div className={universityName()}>
                {player.university} {player.department}
              </div>
            </div>
          </div>
        </div>

        <div className={content()}>
          <div className={likeSection()}>
            <div className={likeContainer()}>
              <div className={heartIcon()}>
                <Icon.Heart />
              </div>
              <span className={likeCount()}>
                {player.likeCount.toLocaleString()}명이 응원해요
              </span>
            </div>
          </div>

          {player.careers && player.careers.length > 0 && (
            <div className={careersSection()}>
              <div className={sectionTitle()}>주요 경력</div>
              <div className={sectionCard()}>
                {player.careers.map((career, index) => (
                  <div key={index} className={careerItem()}>
                    {career}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={careersSection()}>
            <div className={sectionTitle()}>프로필</div>
            <div className={sectionCard()}>
              <div className={infoRow()}>
                <div className={infoLabel()}>생년월일</div>
                <div className={infoValue()}>{formatDate(player.birth)}</div>
              </div>
              <div className={infoRow()}>
                <div className={infoLabel()}>신장/체중</div>
                <div className={infoValue()}>{player.height} / {player.weight}</div>
              </div>
              <div className={infoRow()}>
                <div className={infoLabel()}>포지션</div>
                <div className={infoValue()}>{player.position}</div>
              </div>
              <div className={infoRow()}>
                <div className={infoLabel()}>백넘버</div>
                <div className={infoValue()}>{player.backNumber}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PlayerOverlay;
