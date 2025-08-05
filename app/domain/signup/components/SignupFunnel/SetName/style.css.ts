import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.13rem',
  padding: '2.44rem 1.25rem 0 1.25rem',
});

export const Guide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  color: vars.color['white-60'],
  fontSize: '1.375rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.055rem',
  paddingLeft: '0.25rem',
});

export const Description = style({
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '-0.03rem',
});

export const Strong = style({
  color: vars.color.white,
});

export const FormWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
});

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

export const ErrorMessage = style({
  color: '#F95B6E',
  fontSize: '0.75rem',
  fontWeight: 300,
  lineHeight: 1.2,
  letterSpacing: '-0.03rem',
});
