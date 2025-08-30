import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  flexGrow: 1,
  position: 'relative',
});
export const Header = style({
  marginTop: '1rem',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const TitleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: '1.6',
  letterSpacing: '-0.045rem',
  color: vars.color['white-60'],
});
export const Title = style({
  color: vars.color['white-87'],
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: 1.6,
  letterSpacing: '-0.06rem',
});

export const BottomButton = style({
  position: 'absolute',
  height: '2.875rem',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(90deg, #58009E 0%, #9100D5 100%)',
  borderRadius: '0.5rem',
  bottom: '1.25rem',
  left: '1.25rem',
  right: '1.25rem',
});

export const BallImage = style({
  width: '18rem',
  height: '18rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -14rem)',
  zIndex: 1,
});

export const TokyImage = style({
  height: '18rem',
  zIndex: 2,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -4rem)',
});
