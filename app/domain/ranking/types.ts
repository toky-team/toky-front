export type RankingType = 'activity' | 'betRate';

export interface RankingItemData {
  userId: string;
  username: string;
  university: string;
  rank: number;
  hitRate?: number; // 활동 랭킹
  score?: number;   // 적중률 랭킹
}

export interface MyRankData extends RankingItemData {}
