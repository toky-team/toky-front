import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  height: '10.625rem',
  flexShrink: 0,
  background:
    'linear-gradient(0deg, rgba(18, 18, 18, 0.15) 0%, rgba(18, 18, 18, 0.00) 42.96%), linear-gradient(90deg, rgba(76, 14, 176, 0.40) -12.75%, rgba(76, 14, 176, 0.24) 113.73%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.235rem',
});

export const ButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
});

export const ButtonStyle = recipe({
  base: {
    padding: '0.5rem 1rem',
    borderRadius: '6.1875rem',
    color: '#FFF',
    fontSize: '0.875rem',
    letterSpacing: '-0.035rem',
  },
  variants: {
    type: {
      primary: {
        background: vars.color['white-15'],
        fontWeight: 500,
      },
      secondary: {
        background: 'linear-gradient(90deg, rgba(134, 0, 240, 0.80) -12.75%, rgba(70, 0, 183, 0.80) 113.73%)',
        fontWeight: 700,
      },
    },
  },
});
