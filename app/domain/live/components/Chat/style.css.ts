import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  display: 'flex',
  gap: '0.5rem',
  padding: '0.5rem 1.25rem',
  alignItems: 'flex-start',
  width: '100%',
});

export const Nickname = recipe({
  base: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '-0.035rem',
  },
  variants: {
    university: {
      고려대학교: {
        color: vars.color['light-red'],
      },
      연세대학교: {
        color: vars.color['light-blue'],
      },
    },
  },
});

export const Message = style({
  color: vars.color['white-87'],
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: '-0.035rem',
});
