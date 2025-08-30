export const SportArray = [
  {
    id: '야구',
    value: '야구',
  },
  {
    id: '축구',
    value: '축구',
  },
  {
    id: '농구',
    value: '농구',
  },
  {
    id: '럭비',
    value: '럭비',
  },
  {
    id: '아이스하키',
    value: '빙구',
  },
] as const;

export const SportsPathMap = {
  soccer: '축구',
  basketball: '농구',
  baseball: '야구',
  rugby: '럭비',
  hockey: '아이스하키',
} as const;

export const SportsToIndexMap: Record<SportType, number> = {
  야구: 0,
  축구: 1,
  농구: 2,
  럭비: 3,
  아이스하키: 4,
};

export const UniversityArray = ['고려대학교', '연세대학교'] as const;

export type SportType = (typeof SportArray)[number]['id'];
export type UniversityType = (typeof UniversityArray)[number];
export type SportsPathType = keyof typeof SportsPathMap;

export const SportToEnglishMap: Record<SportType, string> = {
  야구: 'baseball',
  축구: 'soccer',
  농구: 'basketball',
  럭비: 'rugby',
  아이스하키: 'hockey',
};
