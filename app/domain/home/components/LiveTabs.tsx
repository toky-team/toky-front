import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useGetLiveUrl } from '@/domain/live/apis/useGetLiveUrl';
import { Link } from 'react-router';
import type { SportType, SportsPathType } from '@/lib/types';
import { SportsPathMap, SportsToIndexMap } from '@/lib/types';
import { SCHEDULE_BY_SPORT } from '@/lib/constants';
import Live from '@/lib/assets/icons/Live';

function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  // youtu.be/<id>
  const mShort = url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?&#/]+)/);
  if (mShort?.[1]) return mShort[1];
  // youtube.com/watch?v=<id>
  const mWatch = url.match(/[?&]v=([^?&#/]+)/);
  if (mWatch?.[1]) return mWatch[1];
  // youtube.com/shorts/<id> or /embed/<id>
  const mPath = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:shorts|embed)\/([^?&#/]+)/);
  if (mPath?.[1]) return mPath[1];
  return null;
}

const buildYouTubeThumbnailUrl = (url: string): string | null => {
  const videoId = extractYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
};

export function LiveTabs({ statusBySport }: { statusBySport: Partial<Record<SportType, '시작 전' | '진행 중' | '종료'>> }) {
  const { data, isFetching } = useGetLiveUrl();

  type LiveItem = {
    id: string;
    sport: SportType;
    broadcastName: string;
    url: string;
  };

  const getPathFromSport = (sport: SportType): SportsPathType | null => {
    const entry = (Object.entries(SportsPathMap) as Array<[SportsPathType, SportType]>).find(([, ko]) => ko === sport);
    return entry ? entry[0] : null;
  };

  const groupedBySport = (data ?? []).reduce((acc, item) => {
    const path = getPathFromSport(item.sport as SportType);
    if (!path) return acc;
    if (!acc[path]) acc[path] = { sport: item.sport as SportType, items: [] as LiveItem[] };
    acc[path].items.push(item as LiveItem);
    return acc;
  }, {} as Record<SportsPathType, { sport: SportType; items: LiveItem[] }>);

  const entries = (Object.entries(groupedBySport) as Array<[
    SportsPathType,
    { sport: SportType; items: LiveItem[] }
  ]>)
    // 경기 상태가 '종료'인 종목은 제외
    .filter(([, group]) => statusBySport[group.sport] !== '종료')
    .sort((a, b) => SportsToIndexMap[a[1].sport] - SportsToIndexMap[b[1].sport]);

  return (
    <div className="px-5 pt-6">
      <div className="flex gap-2 items-center">
        <div className="text-white/87 text-[20px] font-bold">실시간 라이브</div>
        <Live />
      </div>

      {isFetching && entries.length === 0 ? null : entries.map(([path, group]) => {
        // URL이 존재하는 항목만 탭으로 노출
        const items = group.items.filter((item) => Boolean(item.url));
        const defaultId = items[0]?.id;
        if (!defaultId) return null;
        return (
          <div key={`${path}-${defaultId}`} className="mb-6">
            <div className="mt-2 mb-4 h-[1px] bg-white/15" />
            <div className="flex items-center gap-2 mb-3">
              <div className="text-base text-white/80 font-semibold">{group.sport}</div>
              {SCHEDULE_BY_SPORT[group.sport as SportType] && (
                <div className="text-sm text-white/60">
                  {SCHEDULE_BY_SPORT[group.sport as SportType]!.time} | {SCHEDULE_BY_SPORT[group.sport as SportType]!.location}
                </div>
              )}
            </div>
            <Tabs key={`${path}-${defaultId}`} defaultValue={defaultId}>
              <TabsList>
                {items.map((item) => (
                  <TabsTrigger className="w-[72px] h-[32px] text-[15px] rounded-[99px] bg-white/15 mb-2 mr-2 data-[state=active]:bg-white data-[state=active]:text-[#121212]" key={item.id} value={item.id}>
                    {item.broadcastName}
                  </TabsTrigger>
                ))}
              </TabsList>
              {items.map((item) => {
                const thumbnailUrl = buildYouTubeThumbnailUrl(item.url);
                return (
                  <TabsContent key={item.id} value={item.id}>
                    {thumbnailUrl && (
                      <Link to={`/live/${path}`}>
                        <img
                          src={thumbnailUrl}
                          alt={item.broadcastName}
                          className="aspect-video w-full rounded-[10px] object-cover"
                          loading="lazy"
                        />
                      </Link>
                    )}
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        );
      })}
    </div>
  );
}