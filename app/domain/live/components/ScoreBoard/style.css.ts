import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  width: '100%',
  height: '6.25rem',
  padding: '1.1875rem 3.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#121212',
  position: 'relative',
});

export const Score = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '-0.03rem',
  zIndex: 1,
});
// TODO: 폰트 추가
export const ScoreNumber = style({
  color: '#FFF',
  fontSize: '2.5rem',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '0.4rem',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3.125rem',
});

export const Background = recipe({
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
  },
  variants: {
    school: {
      korea: {
        left: 0,
        background: 'linear-gradient(90deg, rgba(243, 35, 60, 0.30) 0%, rgba(243, 35, 60, 0.00) 100%)',
      },
      yonsei: {
        right: 0,
        background: 'linear-gradient(90deg, rgba(41, 72, 255, 0.00) 0%, rgba(41, 72, 255, 0.30) 100%)',
      },
    },
  },
});

export const Info = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  zIndex: 1,
});

export const PrevStats = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const PrevText = style({
  color: vars.color['white-60'],
  fontSize: '0.75rem',
  fontWeight: 400,
  letterSpacing: '-0.03rem',
});

export const PrevScore = style({
  color: vars.color['white-60'],
  fontSize: '0.8125rem',
  fontWeight: 700,
  lineHeight: 1.4,
  letterSpacing: '0.08125rem',
});

export const SportsSummary = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontSize: '0.875rem',
  lineHeight: 1.4,
});

export const SportsTitle = style({
  fontWeight: 700,
  letterSpacing: '-0.035rem',
});

export const SportsLocation = style({
  fontWeight: 400,
  letterSpacing: '-0.03rem',
});
