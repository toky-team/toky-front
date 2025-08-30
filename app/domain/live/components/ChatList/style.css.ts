import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  background: vars.color['bg-5'],
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});
