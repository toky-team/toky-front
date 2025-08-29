import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '7.625rem',
  paddingTop: '4.25rem',
  width: '100%',
  alignItems: 'center',
});

export const Header = style({
  display: 'flex',
  color: vars.color['white-87'],
  fontSize: '1.5rem',
  lineHeight: 1.6,
  fontWeight: 700,
  letterSpacing: '-0.06rem',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
});

export const CountDown = style({
  color: vars.color['white-87'],
  fontFamily: vars.font.giantsBold,
  textShadow: '0 0 40px rgba(255, 255, 255, 0.50)',
  fontSize: '6.25rem',
  fontWeight: 700,
});
