import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const ModalWrapper = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: vars.zIndex.modal,
  maxWidth: '80%',
});

export const Content = recipe({
  base: {
    width: '21.875rem',
    maxWidth: '100%',
    padding: '4rem 1.25rem 1.5rem 1.25rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '1rem',
    background: vars.color['bg-14'],
    boxShadow: '0 4px 10px 0 rgba(18, 18, 18, 0.15)',
    gap: '3rem',
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.075rem',
    color: vars.color.white,
    textAlign: 'center',
  },
  variants: {
    isModalOpen: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },
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
    backdropBlur: {
      true: {
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      },
      false: {},
    },
  },
});

export const Button = style({
  width: '100%',
  height: '2.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.5rem',
  background: vars.color.purple,
});
