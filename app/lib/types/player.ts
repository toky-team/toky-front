import type { SportType, UniversityType } from '@/lib/types';

export interface PlayerInterface {
  id: string;
  name: string;
  university: UniversityType;
  sport: SportType;
  department: string;
  birth: string;
  height: number;
  weight: number;
  position: string;
  backNumber: number;
  careers: string[];
  imageUrl: string;
  likeCount: number;
  isLikedByUser: boolean;
}
