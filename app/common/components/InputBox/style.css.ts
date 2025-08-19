import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Wrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const Container = recipe({
  base: {
    padding: '1rem',
    outline: 'none',
    background: 'none',

    borderRadius: '0.5rem',
    border: '1px solid',
    color: vars.color['white-87'],
    fontSize: '0.9375rem',
    letterSpacing: '-0.0375rem',
    fontWeight: 500,
    '::placeholder': {
      color: vars.color['white-38'],
    },
    transition: 'all 0.2s ease-in-out',
    borderColor: vars.color['white-87'],
  },
  variants: {
    status: {
      error: {
        borderColor: vars.color['light-red'],
      },
      default: {
        borderColor: vars.color['white-15'],
      },
      focus: {
        borderColor: vars.color['white-87'],
      },
      filled: {
        borderColor: vars.color['white-87'],
      },
      changeable: {
        borderColor: vars.color['white-87'],
      },
    },
  },
});

export const ValidationButton = style({
  position: 'absolute',
  right: '2rem',
  top: '50%',
  transform: 'translate3d(0, -50%, 0)',

  color: vars.color['white-87'],
  fontSize: '0.875rem',
  fontWeight: 500,
  letterSpacing: '-0.035rem',
});
