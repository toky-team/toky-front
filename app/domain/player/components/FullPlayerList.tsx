import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tv } from "tailwind-variants";
import PlayerCard from "./PlayerCard";
import { useGetPlayer } from "@/common/apis/useGetPlayer";
import { usePlayerOverlay } from "../hooks/usePlayerOverlay";
import type { PlayerInterface } from "@/lib/types/player";

const fullPlayerListVariants = tv({
  slots: {
    root: "w-full max-w-screen-sm mx-auto flex flex-col gap-6 px-4",
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

const FullPlayerList = () => {
  const { root, container, containerLeft, title, description, tabs, tabsList, tabsTrigger, tabsContent, playerGrid } = fullPlayerListVariants();
  
  // API 데이터 가져오기
  const { data: koreaPlayers = [] } = useGetPlayer(undefined, "고려대학교");
  const { data: yonseiPlayers = [] } = useGetPlayer(undefined, "연세대학교");
  
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
            {koreaPlayers.map((player) => (
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
            {yonseiPlayers.map((player) => (
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

export default FullPlayerList;