import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.50)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: vars.zIndex.modalBackdrop,
});

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.25rem',
  padding: '2.25rem 1.25rem 1.5rem 1.25rem',
  borderRadius: '1rem',
  background: vars.color['bg-14'],
  boxShadow: '0 4px 10px 0 rgba(18, 18, 18, 0.15)',
});

export const Button = style({
  borderRadius: '0.5rem',
  background: vars.color.purple,
  width: '19.375rem',
  height: '2.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color['white-87'],
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.04rem',
});

export const Guide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  alignItems: 'center',
});

export const GuideToken = style({
  padding: '0.25rem 0.625rem',
  borderRadius: '6.1875rem',
  background: 'rgba(255, 255, 255, 0.10)',
  color: vars.color['white-60'],
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.0525rem',
});

export const GuideText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.75rem',
  color: vars.color.white,
  fontSize: '1.125rem',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '-0.0675rem',
  textAlign: 'center',
});

export const Description = style({
  display: 'flex',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '-0.0525rem',
  color: vars.color['white-60'],
  gap: '0.25rem',
});
