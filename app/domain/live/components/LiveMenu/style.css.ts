import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '0.75rem 1.25rem',
  gap: '1.6875rem',
  background: vars.color['bg-0'],
});

export const SelectItem = style({
  color: vars.color['white-87'],
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.04rem',
  position: 'relative',
});

export const UnderBar = style({
  position: 'absolute',
  bottom: '-0.75rem',
  left: 0,
  right: 0,
  height: '0.125rem',
  background: vars.color['white-87'],
  borderTopLeftRadius: '0.125rem',
  borderTopRightRadius: '0.125rem',
});
