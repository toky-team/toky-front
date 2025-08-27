import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const StepIndicator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2rem',
  padding: '0.5rem 1rem',
  borderRadius: '6.1875rem',
  background: 'rgba(255, 255, 255, 0.10)',
  color: vars.color['white-60'],
  fontSize: '0.9375rem',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '-0.01875rem',
  width: 'fit-content',
});
