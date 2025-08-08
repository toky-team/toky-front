import { spin, vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  background: vars.color['bg-5'],
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const Trigger = style({
  width: '100%',
});

export const LoadingWrapper = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.625rem',
});

export const LoadingSpinner = style({
  width: '40px',
  height: '40px',

  display: 'flex',
  borderRadius: '50%',
  alignSelf: 'center',
  border: '4px solid #f3f3f3',
  borderTop: '4px solid',
  borderTopColor: vars.color.red,
  animation: `${spin} 0.5s linear infinite`,
});
