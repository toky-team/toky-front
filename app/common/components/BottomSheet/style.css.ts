import { vars } from '@/root.css';
import { recipe } from '@vanilla-extract/recipes';
import { keyframes, style } from '@vanilla-extract/css';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const contentShow = keyframes({
  '0%': { transform: 'translateY(16px)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
});

const contentHide = keyframes({
  '0%': { transform: 'translateY(0)', opacity: 1 },
  '100%': { transform: 'translateY(16px)', opacity: 0 },
});

export const Overlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.50)',
  zIndex: 100,
  selectors: {
    '&[data-state="open"]': {
      animation: `${overlayShow} 250ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${overlayHide} 250ms ease-in`,
    },
  },
});

export const Content = style({
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  background: vars.color['bg-7'],
  boxShadow: '0 -8px 24px rgba(0,0,0,0.2)',
  maxHeight: '70vh',
  overflowY: 'auto',
  willChange: 'transform, opacity',
  zIndex: 101,
  selectors: {
    '&[data-state="open"]': {
      animation: `${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${contentHide} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
});

export const Header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  padding: '0.625rem 1.25rem',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontSize: '1rem',
  fontWeight: 400,
  letterSpacing: '-0.04rem',
  borderBottom: '1px solid',
  borderBottomColor: '#333333',
  background: vars.color['bg-10'],
});

export const List = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 1.25rem',
  gap: '1rem',
  alignItems: 'center',
});

export const Item = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 120ms ease',
    fontSize: '1rem',
    color: vars.color['white-87'],
    lineHeight: 1.4,
  },
  variants: {
    selected: {
      true: {
        fontWeight: 500,
        opacity: 1,
      },
      false: {
        fontWeight: 400,
        opacity: 0.6,
      },
    },
  },
});
