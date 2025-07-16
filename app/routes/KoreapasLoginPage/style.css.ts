import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(180deg, rgba(249, 91, 110, 0.00) 0%, rgba(249, 91, 110, 0.10) 100%), #FFF',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.81rem',
  alignItems: 'stretch',
});

export const Content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.06rem',
  alignItems: 'center',
});

export const Logo = style({
  width: '9.6rem',
});

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  width: '100%',
  padding: '0 1.25rem',
});

export const SignUpLinkWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.035rem',
});

export const SignUpInstruction = style({
  color: 'rgba(0, 0, 0, 0.60)',
});

export const SignUpLink = style({
  color: vars.color['light-red'],
});

export const Copyright = style({
  position: 'fixed',
  bottom: '1.875rem',
  left: '50%',
  transform: 'translate3d(-50%, 0, 0)',
  color: 'rgba(0, 0, 0, 0.38)',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: '-0.035rem',
});
