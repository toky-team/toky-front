import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const InputStatus = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: vars.color['white-60'],
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.2,
  padding: '0 0.25rem',
});
