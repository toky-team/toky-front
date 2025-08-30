import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

export const Title = style({
  color: vars.color['white-87'],
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '-0.0675rem',
});
