import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  width: '100%',
  height: '100%',
  flexGrow: 1,
  padding: '2rem 1.25rem 0.875rem 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const QuestionTitle = style({
  color: vars.color['white-87'],
  fontSize: '1.25rem',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '-0.05rem',
});

export const MoreButton = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.25rem 0.625rem',
    borderRadius: '6.1875rem',
    color: vars.color['white-60'],
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '-0.035rem',
    alignSelf: 'center',
  },
  variants: {
    isScorePrediction: {
      true: {
        gap: '0.25rem',
        background: 'rgba(255, 255, 255, 0.10)',
      },
      false: {
        gap: '0.5rem',
        background: 'rgba(255, 238, 87, 0.15)',
      },
    },
  },
});

export const MoreTicketText = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  color: 'rgba(255, 238, 87, 0.90)',
  fontWeight: 700,
});
