export const SPORTS_ARRAY = [
  { type: 'baseball', title: '야구' },
  { type: 'hockey', title: '빙구' },
  { type: 'basketball', title: '농구' },
  { type: 'soccer', title: '축구' },
  { type: 'rugby', title: '럭비' },
] as const;

export type Sports = (typeof SPORTS_ARRAY)[number]['type'];

export const SPORTS_MAP: Record<Sports, number> = {
  baseball: 0,
  hockey: 1,
  basketball: 2,
  soccer: 3,
  rugby: 4,
};
