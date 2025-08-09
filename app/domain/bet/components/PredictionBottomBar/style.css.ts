import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  width: '100%',
  height: '4.75rem',
  padding: '1.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexShrink: 0,
  background: vars.color['bg-3'],
});

export const NavButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: vars.color['white-87'],
  fontSize: '0.9375rem',
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '-0.0375rem',
});
