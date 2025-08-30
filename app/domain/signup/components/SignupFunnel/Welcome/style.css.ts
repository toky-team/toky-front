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
