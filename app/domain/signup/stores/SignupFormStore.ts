import { create } from 'zustand';

import type { UniversityType } from '@/lib/types';
import type { SignupElements, SignupFormType } from '@/lib/types/signup';

interface SignupFormStore extends SignupFormType {
  agreement: boolean;
  setName: (input: string) => void;
  setPhoneNumber: (input: string) => void;
  setUniversity: (select: UniversityType) => void;
  setAuthNumber: (input: string) => void;
  setAgreement: (input: boolean) => void;
}

export const useSignupForm = create<SignupFormStore>((set) => ({
  name: '',
  university: null,
  phoneNumber: '',
  authNumber: '',
  agreement: false,
  setName: (input: string) => set({ name: input }),
  setUniversity: (select: UniversityType) => set({ university: select }),
  setPhoneNumber: (input: string) => set({ phoneNumber: input }),
  setAuthNumber: (input: string) => set({ authNumber: input }),
  setAgreement: (input: boolean) => set({ agreement: input }),
}));

interface ErrorStore {
  error: SignupElements | null;
  setError: (message: SignupElements) => void;
  clearError: () => void;
}
export const useSignupError = create<ErrorStore>((set) => ({
  error: null,
  setError: (code: SignupElements) => set({ error: code }),
  clearError: () => set({ error: null }),
}));
