import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const Image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const Button = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,

  height: '4rem',
  padding: '1.25rem 0 1.1875rem 0',
  background: vars.color['bg-5'],

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '1.25rem',
  letterSpacing: '-0.05rem',
  fontWeight: 700,

  transition: 'all 0.2s ease-in-out',
  zIndex: 1,
  color: vars.color['white-87'],
});
