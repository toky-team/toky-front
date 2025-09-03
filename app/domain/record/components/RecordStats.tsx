import { useState, useEffect } from "react";
import { useGetMatchRecordBySport } from "@/common/apis/useGetMatchRecordBySport";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const RecordStats = ({ sport }: { sport: string }) => {
  const { data: matchRecord } = useGetMatchRecordBySport(sport);

  // 리그만 추출
  const leagues: string[] = (matchRecord as any)?.map((record: any) => record.league) || [];
  
  // 현재 선택된 리그 state
  const [selectedLeague, setSelectedLeague] = useState<string>("");
  
  // leagues가 변경될 때 첫 번째 리그를 선택
  useEffect(() => {
    if (leagues.length > 0 && (!selectedLeague || !leagues.includes(selectedLeague))) {
      setSelectedLeague(leagues[0]);
    }
  }, [leagues, selectedLeague]);

  // 리그별 데이터 필터링 함수
  const getLeagueData = (league: string) => {
    return (matchRecord as any)?.filter((record: any) => record.league === league) || [];
  };

  // 현재 선택된 리그의 description 가져오기
  const getCurrentDescription = () => {
    const currentLeagueData = getLeagueData(selectedLeague);
    return {
      winningComment: currentLeagueData[0]?.winningComment || '',
      leagueFullName: currentLeagueData[0]?.leagueFullName || '',
    };
  };

  return (
    <div className="w-full flex flex-col gap-10 mt-10 pb-20">
      {getCurrentDescription() && (
        <div className="flex flex-col gap-2 items-center">
          <div className=" text-white/38 text-[14px] leading-[1.6] font-normal">
            {getCurrentDescription().leagueFullName}
          </div>
          <div className=" text-white/87 text-[20px] font-bold">
            {getCurrentDescription().winningComment}
          </div>
        </div>
      )}
      
      <Tabs value={selectedLeague} onValueChange={setSelectedLeague}>
        <TabsList className="mx-5 flex flex-row gap-[6px]">
          {leagues.map((league: string) => (
            <TabsTrigger className="text-[12px] font-normal px-3 py-1 rounded-[40px] bg-[#1E1E1E] text-white/38 data-[state=active]:bg-[#333333] data-[state=active]:text-white/87 data-[state=active]:font-medium" key={league} value={league}>{league}</TabsTrigger>
          ))}
        </TabsList>

        {leagues.map((league: string) => {
          const leagueData = getLeagueData(league);

          return (
            <TabsContent key={league} value={league} className="space-y-6">
              {leagueData.map((record: any, index: number) => (
                <div key={index} className="flex flex-col gap-5">
                  {record.imageUrl && (
                    <img src={record.imageUrl} alt={record.league} className="w-full h-full object-cover" />
                  )}
                  {/* 대학 순위 테이블 */}
                  {record.universityStatKeys.length > 0 && (
                    <div className="flex flex-col">
                      <div className="flex flex-row justify-between pl-[30px] pr-[20px] pb-[5px]">
                        <div className="text-white/60 text-[10px] w-[110px]">대학순위</div>
                        {record.universityStatKeys?.slice(0, record.universityStatKeys.length - 1).map((key: string) => (
                          <div key={key} className="flex items-center justify-center text-white/60 w-[50px] text-[10px]">{key}</div>
                        ))}
                      </div>
                      {record.universityStats?.map((universityStat: any, idx: number) => (
                        <div key={idx} className="flex justify-between pl-[24px] pr-[20px] h-[38px] bg-[#2A2A2A]">
                          <div className="w-[120px] flex flex-row gap-[10px] items-center">
                            <div className="text-white font-bold text-[14px] w-[20px]">{idx + 1}</div>
                            <span className={`text-[13px] font-medium ${universityStat.university === '연세대학교' ? 'text-blue-400' : 'text-red-400'}`}>
                              {universityStat.university === '연세대학교' ? '연세대' : '고려대'}
                            </span>
                          </div>
                          {record.universityStatKeys?.slice(0, record.universityStatKeys.length - 1).map((key: string) => (
                            <div key={key} className="flex text-[12px] w-[50px] items-center justify-center text-white">
                              {universityStat.stats[key] || '0'}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 선수 통계 테이블 */}
                  {record.playerStatsWithCategory?.map((category: any, categoryIdx: number) => (
                    <div key={categoryIdx} className="flex flex-col">
                      <div className="flex justify-between pl-[30px] pr-[20px] pb-[5px]">
                        <div className="text-white/60 text-[10px] w-[160px]">{category.category}</div>
                        {category.playerStatKeys?.slice(0, category.playerStatKeys.length - 1).map((key: string) => (
                          <div key={key} className="flex items-center justify-center text-white/60 text-[10px] w-[40px]">{key}</div>
                        ))}
                      </div>
                      {category.playerStats?.map((player: any, playerIdx: number) => (
                        <div key={playerIdx} className="flex justify-between pl-[24px] pr-[20px] h-[38px] bg-[#2A2A2A]">
                          <div className="w-[160px] flex flex-row gap-[10px] items-center">
                            <div className="text-white font-bold text-[14px] w-[20px]">{player.stats['순위']}</div>
                            <span className="text-white text-[13px]">{player.name}</span>
                            <div className="flex flex-row gap-1">
                              <div className={`text-[10px] ${player.university === '연세대학교' ? 'text-blue-400' : 'text-red-400'}`}>
                                {player.university === '연세대학교' ? '연세대' : '고려대'}
                              </div>
                              <div className="text-white/60 text-[10px]">{player.position}</div>
                            </div>
                          </div>
                          {category.playerStatKeys?.slice(0, category.playerStatKeys.length - 1).map((key: string) => (
                            <div key={key} className="flex w-[40px] items-center justify-center text-white">
                              {player.stats[key] || '0'}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default RecordStats;