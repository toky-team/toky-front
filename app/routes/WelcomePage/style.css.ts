import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const Text = style({
  position: 'absolute',
  top: '50%',
  right: '1.125rem',
  transform: 'translateY(-50%)',
  color: vars.color['white-60'],
  fontSize: '1.25rem',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '-0.05rem',
});

export const Nickname = style({
  color: vars.color.white,
});

export const Image = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  right: 0,
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
