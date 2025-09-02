import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tv } from "tailwind-variants";
import PlayerCard from "./PlayerCard";
import { usePlayerOverlay } from "../hooks/usePlayerOverlay";
import type { PlayerInterface } from "@/lib/types/player";

const fullPlayerViewVariants = tv({
  slots: {
    root: "w-full max-w-screen-sm mx-auto flex flex-col gap-6 px-4 pb-10",
    container: "w-full flex flex-row justify-between items-center",
    containerLeft: "flex flex-col gap-1",
    title: "text-base font-bold text-white",
    description: "text-sm font-normal text-white/60",
    tabs: "w-full",
    tabsList: "bg-white/15 backdrop-blur-sm rounded-full p-1 flex",
    tabsTrigger: "flex-1 rounded-full px-3 py-1 text-center font-medium transition-all duration-300 ease-in-out relative z-10 data-[state=active]:bg-white data-[state=active]:text-[#121212] text-white/70",
    tabsContent: "w-full mt-6 transition-opacity duration-300 ease-in-out",
    playerGrid: "grid grid-cols-3 gap-3",
  },
});

const FullPlayerView = ({ koreaPlayers, yonseiPlayers }: { koreaPlayers: PlayerInterface[], yonseiPlayers: PlayerInterface[] }) => {
  const { root, container, containerLeft, title, description, tabs, tabsList, tabsTrigger, tabsContent, playerGrid } = fullPlayerViewVariants();
  
  // 오버레이 훅
  const { openPlayerOverlay } = usePlayerOverlay();
  
  const handlePlayerClick = (player: PlayerInterface) => {
    openPlayerOverlay(player);
  };

  return (
    <div className={root()}>
      <Tabs defaultValue="korea" className={tabs()}>
        <div className={container()}>
          <div className={containerLeft()}>
            <div className={title()}>
              전체선수 보기
            </div>
            <div className={description()}>
              양교의 모든 선수들을 확인해보세요
            </div>
          </div>
          <TabsList className={tabsList()}>
            <TabsTrigger className={tabsTrigger()} value="korea">고려대</TabsTrigger>
            <TabsTrigger className={tabsTrigger()} value="yonsei">연세대</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="korea" className={tabsContent()}>
          <div className={playerGrid()}>
            {koreaPlayers.sort((a, b) => a.backNumber - b.backNumber).map((player) => (
              <PlayerCard
                key={player.id}
                id={player.id}
                name={player.name}
                number={player.backNumber}
                image={player.imageUrl}
                likes={player.likeCount}
                team="korea"
                player={player}
                onClick={() => handlePlayerClick(player)}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="yonsei" className={tabsContent()}>
          <div className={playerGrid()}>
            {yonseiPlayers.sort((a, b) => a.backNumber - b.backNumber).map((player) => (
              <PlayerCard
                key={player.id}
                id={player.id}
                name={player.name}
                number={player.backNumber}
                image={player.imageUrl}
                likes={player.likeCount}
                team="yonsei"
                player={player}
                onClick={() => handlePlayerClick(player)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FullPlayerView;