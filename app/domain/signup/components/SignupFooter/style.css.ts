import { vars } from '@/root.css';
import { recipe } from '@vanilla-extract/recipes';

// TODO: Style 손보기
export const Container = recipe({
  base: {
    position: 'fixed',
    bottom: 0,

    width: '100%',
    height: '4rem',
    padding: '1.25rem 0',
    background: vars.color['bg-5'],

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '1.25rem',
    letterSpacing: '-0.8px',
    fontWeight: 700,

    transition: 'all 0.2s ease-in-out',
    zIndex: 1,
  },
  variants: {
    clickable: {
      true: {
        color: vars.color['white-87'],
      },
      false: {
        color: vars.color['white-15'],
      },
    },
  },
});
