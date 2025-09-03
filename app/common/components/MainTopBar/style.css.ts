import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  backgroundColor: vars.color['bg-0'],
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '44px',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.625rem 1.25rem',
});

export const LeftArea = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  gap: '0.875rem',
});
