import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  background: vars.color['bg-5'],
  overflowY: 'auto',
  height: '100%',
  padding: '0.75rem',
  display: 'flex',
  flexDirection: 'column',
});
