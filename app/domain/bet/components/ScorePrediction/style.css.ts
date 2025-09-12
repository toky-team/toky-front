import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  width: '100%',
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
  position: 'relative',
});

export const Divider = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});
export const Square = style({
  width: '0.375rem',
  height: '0.375rem',
  background: vars.color['white-87'],
});

export const ScoreBox = style({
  flex: '1 0 0',
  display: 'flex',
  gap: '0.5rem',
});

export const ScoreNumberContainer = style({
  height: '6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.035rem',
  borderRadius: '0.625rem',
  background: 'rgba(255, 255, 255, 0.05)',
  flex: '1 0 0',
});

export const ScoreNumber = style({
  color: vars.color['white-87'],
  fontSize: '2.375rem',
  fontWeight: 700,
});

export const ScoreController = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
});

export const ScoreControllerButton = style({
  width: '2.75rem',
  height: '2.75rem',
  backgroundColor: vars.color['white-15'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.5rem',
});

export const StickerWrapper = style({
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -48.5%, 0)',
});
