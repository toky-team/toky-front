import type { UniversityType } from '@/lib/types';

export interface SignupFormType {
  name: string;
  phoneNumber: string;
  university: UniversityType | null;
}

export type SignupElements = keyof SignupFormType;
