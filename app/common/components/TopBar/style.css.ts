import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  display: 'flex',
  height: '3.25rem',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.8125rem 1.25rem',
  zIndex: 50,
});

export const BackButton = recipe({
  variants: {
    color: {
      '87': {
        color: vars.color['white-87'],
      },
      d9: {
        color: '#D9D9D9',
      },
    },
  },
});

export const RightArea = style({
  display: 'flex',
  height: '26px',
  width: '26px',
  alignItems: 'center',
  justifyContent: 'center',
});
