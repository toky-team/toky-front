import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',
  alignItems: 'center',
  gap: '1.5rem',
  height: '100%',
  position: 'relative',
});

export const Contents = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  color: vars.color['white-60'],
  textAlign: 'center',
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '-0.045rem',
});

export const Heading = style({
  color: vars.color['white-87'],
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 500,
  lineHeight: 1.6,
  letterSpacing: '-0.06rem',
});

export const Button = style({
  position: 'absolute',
  bottom: '1.25rem',
  left: '1.25rem',
  right: '1.25rem',
  height: '2.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.5rem',
  background: 'linear-gradient(90deg, #58009E 0%, #9100D5 100%)',
  lineHeight: '1.2',
  letterSpacing: ' -0.04rem',
  color: vars.color.white,
  fontWeight: 500,
});
