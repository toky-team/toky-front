import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const ButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: vars.color['white-87'],
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '-0.035rem',
});

export const CheckWrapper = style({
  borderRadius: '4px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CheckGradient = recipe({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    background: vars.color['purple-gr'],
    transition: 'opacity 0.2s ease-in-out',
  },
  variants: {
    selected: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});

export const ContentsWrapper = style({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const FoldHandler = style({
  color: vars.color['white-38'],
  fontSize: '0.8125rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '-0.0325rem',
  textDecorationLine: 'underline',
  textUnderlinePosition: 'from-font',
});

export const Details = style({
  paddingLeft: '2rem',
  color: vars.color['white-60'],
  fontSize: '0.6875rem',
  fontWeight: 400,
  letterSpacing: '-0.0275rem',
  lineHeight: 1.2,
  wordBreak: 'keep-all',
});
