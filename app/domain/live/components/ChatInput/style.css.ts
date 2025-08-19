import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  width: '100%',
  padding: '0.625rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.10)',
  background: vars.color['bg-5'],
  flexShrink: 0,
});

export const Container = style({
  width: '100%',
  padding: '0.625rem 0.75rem',
  borderRadius: '0.625rem',
  background: vars.color['bg-14'],
});
