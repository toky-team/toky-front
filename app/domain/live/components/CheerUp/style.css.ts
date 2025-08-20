import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  position: 'absolute',
  top: '-4.25rem',
  right: '1.25rem',
  display: 'flex',
  padding: '0.25rem',
  gap: '0.25rem',
  height: '3.75rem',
  borderRadius: '1rem',
  background: vars.color['bg-14'],
});

export const LikeButton = recipe({
  base: {
    width: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.75rem',
  },
  variants: {
    univ: {
      korea: {
        color: vars.color['light-red'],
      },
      yonsei: {
        color: vars.color['light-blue'],
      },
    },
  },
});

export const LikeCount = style({
  color: vars.color['white-87'],
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: 1.4,
});
