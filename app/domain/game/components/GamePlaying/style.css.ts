import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '1.25rem',
  justifyContent: 'space-between',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  maxHeight: '700px',
});

export const Header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontSize: '1.25rem',
  fontWeight: 500,
  lineHeight: 1.6,
  letterSpacing: '-0.05rem',
  textAlign: 'center',
  flexShrink: 0,
  zIndex: 1,
  gap: '0.75rem',
  width: '100%',
});

export const BallCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  justifyContent: 'center',
});

export const BallCountItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  background: 'rgba(0, 0, 0, 0.30)',
  width: '3.25rem',
  height: '3.25rem',
});

export const BallCountItemBall = style({
  width: '2.5rem',
  height: '2.5rem',
});

export const Board = style({
  width: '100%',
  padding: '0 1rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.625rem',
  zIndex: 1,
});

export const ProgressBarContainer = style({
  width: '100%',
  flexShrink: 0,
  padding: '0 1rem',
  paddingBottom: '1rem',
  zIndex: 1,
});

export const ProgressBar = style({
  background: vars.color['white-38'],
  width: '100%',
  borderRadius: '62.4375rem',
  height: '1rem',
  overflow: 'hidden',
});

export const ProgressBarFill = style({
  backgroundColor: vars.color['white-87'],
  height: '100%',
});

export const Filter = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  filter: 'blur(5px)',
  pointerEvents: 'none',
  objectFit: 'cover',
  objectPosition: 'center center',
});

export const Target = style({
  width: '6.875rem',
  height: '6.875rem',
  padding: '0.875rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const TargetBall = style({
  width: '100%',
  height: '100%',
});
