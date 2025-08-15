import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = recipe({
  base: {
    width: '8rem',
    height: '8rem',
    borderRadius: '100%',
    position: 'relative',
    overflow: 'hidden',

    color: vars.color['white-87'],
    fontSize: '1.125rem',
    letterSpacing: '-0.045rem',

    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    isSelected: {
      true: {
        fontWeight: 700,
      },
      false: {
        fontWeight: 500,
      },
    },
  },
});

export const Gradient = recipe({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  variants: {
    univ: {
      고려대학교: {
        background: 'var(--grad_red, linear-gradient(90deg, #F3233C 0%, #F95B6E 100%))',
      },
      연세대학교: {
        background: 'var(--grad_blue, linear-gradient(90deg, #5B84FF 0%, #2948FF 100%))',
      },
    },
  },
});

export const Background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -2,
  background: vars.color['bg-5'],
});
