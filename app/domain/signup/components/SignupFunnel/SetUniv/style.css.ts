import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  padding: '3.875rem 1.5rem 0 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  fontSize: '1.375rem',
  letterSpacing: '-0.055rem',
  fontWeight: 500,
  color: vars.color['white-60'],
});

export const Strong = style({
  color: vars.color['white-87'],
});

export const ButtonWrapper = style({
  display: 'flex',
  gap: '1.375rem',
  alignItems: 'center',
  justifyContent: 'center',
});
