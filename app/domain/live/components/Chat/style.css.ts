import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  gap: '0.5rem',
  padding: '0.5rem 1.25rem',
  alignItems: 'flex-start',
  width: '100%',
});

export const Nickname = style({
  color: vars.color['white-60'],
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '-0.035rem',
});

export const Message = style({
  color: vars.color['white-87'],
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: '-0.035rem',
});
