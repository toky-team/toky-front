import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: vars.zIndex.modal,
  backgroundColor: vars.color['bg-0'],
});

export const Content = style({
  position: 'relative',
  zIndex: vars.zIndex.modal,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const CancelButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: vars.color['white-15'],
  padding: '0.75rem',
});

export const ShareButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '99px',
  background: vars.color['white-87'],
  gap: '0.5rem',
  padding: '0.75rem 1.5rem',

  color: vars.color['bg-0'],
  fontSize: '1.0625rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.043rem',
});

export const ToolTip = style({
  position: 'relative',
  color: vars.color['white-87'],
  display: 'flex',
  padding: '0.5rem 0.75rem',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.8125rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '-0.033rem',
  borderRadius: '0.5rem',
  textAlign: 'center',
  background: vars.color['white-15'],
  marginLeft: '3.75rem',
});

export const ToolTipArrow = style({
  position: 'absolute',
  top: '-0.375rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 0,
  height: 0,
  borderLeft: '0.375rem solid transparent',
  borderRight: '0.375rem solid transparent',
  borderBottom: '0.375rem solid',
  borderBottomColor: vars.color['white-15'],
});

export const ShareButtonWrapper = style({
  position: 'absolute',
});

export const ContentWrapper = style({
  display: 'flex',
  gap: '0.625rem',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '-3.75rem',
});

export const ButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6875rem',
  marginTop: '0.125rem',
});

export const Backdrop = recipe({
  base: {
    zIndex: vars.zIndex.modalBackdrop,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  variants: {
    isModalOpen: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
});

export const FlexBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
});
