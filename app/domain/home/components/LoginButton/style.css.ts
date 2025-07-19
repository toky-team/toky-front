import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3rem',
  height: '1.5rem',
  borderRadius: '0.375rem',
  backgroundColor: vars.color.purple,
  fontSize: '0.6875rem',
  color: '#FFF',
  fontWeight: 700,
  lineHeight: 1.4,
  letterSpacing: '-0.0275rem',
});
