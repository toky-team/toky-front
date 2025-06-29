import { Sports, SPORTS_ARRAY, SPORTS_MAP } from '@/models/types/sports';

export default async function LivePage({ params }: { params: Promise<{ sports: Sports }> }) {
  const { sports } = await params;

  const sportsInfo = SPORTS_ARRAY[SPORTS_MAP[sports]];

  return <div>KUBS {sportsInfo.title} 라이브</div>;
}
