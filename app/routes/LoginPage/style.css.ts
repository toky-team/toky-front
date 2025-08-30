import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const LoginText = style({
  color: vars.color['white-87'],
  fontSize: '1.125rem',
  lineHeight: 1.2,
  fontWeight: 400,
  letterSpacing: '-0.045rem',
});

export const ButtonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  alignItems: 'center',
  padding: '0 1.25rem',
  paddingBottom: '3.125rem',
  gap: '0.75rem',
  zIndex: 2,
});

export const LoginButton = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.875rem',
    width: '100%',
    borderRadius: '0.5rem',
  },
  variants: {
    src: {
      kakao: {
        background: '#FEE500',
        boxShadow: '4px 4px 40px 0px rgba(254, 229, 0, 0.25)',
      },
      koreapas: {
        background:
          'linear-gradient(90deg, rgba(249, 91, 110, 0.10) 0%, rgba(249, 91, 110, 0.00) 50%, rgba(249, 91, 110, 0.10) 100%), #FFF',
        boxShadow: '4px 4px 40px 0px rgba(249, 91, 110, 0.25)',
      },
    },
  },
});

export const LoginButtonText = recipe({
  base: {
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '-0.02rem',
    lineHeight: 1.2,
  },
  variants: {
    src: {
      kakao: {
        color: vars.color['bg-0'],
      },
      koreapas: {
        background: vars.color['red-gr-2'],
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
});

export const LoginButtonIcon = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    left: '1.25rem',
    transform: 'translate3d(0, -50%, 0)',
  },
  variants: {
    src: {
      kakao: {
        width: '1.5rem',
        height: '1.5rem',
      },
      koreapas: {
        width: '1.75rem',
        height: '1.75rem',
      },
    },
  },
});

export const BackgroundFilter = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '21rem',
  background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.00) 3.77%, #121212 55.12%)',
  zIndex: 1,
});

export const Background = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 0,
});
