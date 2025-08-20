import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const ToastLayout = style({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translate3d(-50%,0,0)',
  display: 'flex',
  justifyContent: 'center',
  zIndex: vars.zIndex.toast,
});

export const ToastContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.25rem',

  width: 'fit-content',
  height: '2.875rem',
  borderRadius: '9999px',
  padding: '13px 31px',

  background: vars.color['white-60'],

  color: vars.color['bg-0'],
  fontSize: '1rem',
  letterSpacing: '-0.0625rem',
  whiteSpace: 'nowrap',
});
