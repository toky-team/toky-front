import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
});

export const InputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
});

export const InputStyle = style({
  borderRadius: '0.5rem',
  width: '100%',
  padding: '1rem',
  alignItems: 'center',
  display: 'flex',
  border: '1px solid rgba(247, 76, 96, 0.10)',
  background: '#FFF',
  boxShadow: '4px 4px 40px 0px rgba(249, 91, 110, 0.10)',
  color: vars.color['bg-0'],
  fontSize: '0.9375rem',
  fontWeight: 500,
  letterSpacing: '-0.0375rem',
  lineHeight: 1.2,
  '::placeholder': {
    color: 'rgba(0, 0, 0, 0.38)',
  },
});

export const ButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '2.875rem',
  padding: '0.75rem 1.25rem',
  borderRadius: '0.5rem',
  background: vars.color['red-gr-2'],
  color: '#FFF',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.04rem',
});

export const ErrorWrapper = style({
  height: '1rem',
  fontSize: '0.8125rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.0325rem',
  color: '#F95B6E',
  textAlign: 'center',
});
