import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tv } from "tailwind-variants";
import PlayerCard from "./PlayerCard";

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

// 샘플 플레이어 데이터 - 고려대
const koreaPlayers = [
  { id: "1", name: "김정현", number: 7, image: "", likes: 1999 },
  { id: "2", name: "이승훈", number: 10, image: "", likes: 2150 },
  { id: "3", name: "박동혁", number: 23, image: "", likes: 1850 },
  { id: "4", name: "최민석", number: 15, image: "", likes: 1750 },
  { id: "5", name: "장현우", number: 8, image: "", likes: 1920 },
  { id: "6", name: "김태현", number: 4, image: "", likes: 1680 },
  { id: "7", name: "이준호", number: 19, image: "", likes: 2050 },
  { id: "8", name: "박성민", number: 12, image: "", likes: 1820 },
  { id: "9", name: "정우진", number: 5, image: "", likes: 1950 },
];

// 샘플 플레이어 데이터 - 연세대
const yonseiPlayers = [
  { id: "10", name: "박민수", number: 7, image: "", likes: 1850 },
  { id: "11", name: "이동민", number: 11, image: "", likes: 2100 },
  { id: "12", name: "정현우", number: 18, image: "", likes: 1750 },
  { id: "13", name: "김승호", number: 9, image: "", likes: 1920 },
  { id: "14", name: "장민재", number: 3, image: "", likes: 1680 },
  { id: "15", name: "오준석", number: 21, image: "", likes: 2050 },
];

const FullPlayerList = () => {
  const { root, container, containerLeft, title, description, tabs, tabsList, tabsTrigger, tabsContent, playerGrid } = fullPlayerListVariants();

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
                number={player.number}
                image={player.image}
                likes={player.likes}
                team="korea"
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
                number={player.number}
                image={player.image}
                likes={player.likes}
                team="yonsei"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FullPlayerList;