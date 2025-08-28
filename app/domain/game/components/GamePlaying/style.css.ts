import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const ProgressBar = style({
  background: vars.color['white-38'],
  width: '100%',
  borderRadius: '62.4375rem',
  height: '1rem',
  overflow: 'hidden',
});

export const ProgressBarFill = style({
  backgroundColor: vars.color['white-87'],
  height: '100%',
});
