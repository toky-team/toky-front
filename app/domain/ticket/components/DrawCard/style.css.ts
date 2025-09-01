import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = style({
  position: 'relative',
  display: 'flex',
  width: '48%',
  height: '14.25rem',
  padding: '1.875rem 0.625rem 0.625rem 0.625rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '0.625rem',
  background: vars.color['white-60'],
  color: vars.color['bg-0'],
});

export const productImage = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: '100%',
});

export const drawBoard = style({
  position: 'absolute',
  display: 'flex',
  padding: '0.5rem 0.75rem',
  justifyContent: 'center',
  alignItems: 'center',
  top: '-10px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: vars.color['white-87'],
  whiteSpace: 'nowrap',
  borderRadius: '0.5rem',
  fontSize: '0.8125rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '-0.0325rem',
  ':before': {
    content:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='5' viewBox='0 0 12 5' fill='none'%3E%3Cpath d='M8.12132 3.87868L12 0L5.24537e-07 -1.04907e-06L3.87868 3.87868C5.05025 5.05025 6.94975 5.05025 8.12132 3.87868Z' fill='white' fill-opacity='0.87'/%3E%3C/svg%3E\")",
    position: 'absolute',
    width: '0.75rem',
    height: '0.375rem',
    top: '1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

export const drawBoardSpan = style({
  fontWeight: 500,
});

export const productName = style({
  fontSize: '1.125rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  letterSpacing: '-0.045rem',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  zIndex: 1,
});

export const drawButton = recipe({
  base: {
    display: 'flex',
    height: '2.875rem',
    padding: '0.75rem 0px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    backgroundColor: vars.color['bg-0'],
    color: vars.color['white-87'],
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '1.5rem',
    letterSpacing: '-0.04rem',
    position: 'relative',
    border: 'none',
    outline: 'none',
  },
  variants: {
    isDone: {
      true: {
        opacity: 0.7,
      },
      false: {
        opacity: 1,
      },
    },
  },
  defaultVariants: {
    isDone: false,
  },
});

export const wave = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  background: vars.color['white-38'],
  borderRadius: '0.625rem',
});
