import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const LiveSrc = style({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '-0.04rem',
});
