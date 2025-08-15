import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '3rem 1.25rem 0 1.25rem',
});

export const Title = style({
  color: vars.color['white-60'],
  fontSize: '1.375rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.04125rem',
  paddingLeft: '0.25rem',
});
