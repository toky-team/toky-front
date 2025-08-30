import type { SportType, UniversityType } from '@/lib/types';

export interface ChatMessageInterface {
  id: string;
  content: string;
  userId: string;
  username: string;
  university: UniversityType;
  sport: SportType;
  createdAt: string;
}

export interface CheerUpInterface {
  sport: SportType;
  KULike: number;
  YULike: number;
  createdAt: string;
  updatedAt: string;
}
