import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const Header = style({
  color: vars.color['white-87'],
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: ' -0.045rem',
});

export const Body = style({
  flexGrow: 1,
  marginTop: '2rem',
  width: '100%',
  padding: '0 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  overflowY: 'auto',
});

export const ProfileImage = style({
  width: '4.375rem',
  height: '4.375rem',
  borderRadius: '12.5rem',
  alignSelf: 'center',
});

export const BottomAction = recipe({
  base: {
    flexShrink: 0,
    width: '100%',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.05rem',
    background: vars.color['bg-5'],
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    isEdit: {
      true: {
        color: vars.color['white-87'],
      },
      false: {
        color: vars.color['white-15'],
      },
    },
  },
});

export const InputStatus = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: vars.color['white-60'],
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.2,
  padding: '0 0.25rem',
});

export const FormWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  position: 'relative',
});

export const ErrorMessage = recipe({
  base: {
    fontSize: '0.75rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.03rem',
  },
  variants: {
    isValidate: {
      true: {
        color: vars.color['white-87'],
      },
      false: {
        color: '#F95B6E',
      },
    },
  },
});

export const ProfileWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.75rem',
});

export const InputWrapper = style({
  position: 'relative',
  width: '100%',
});

export const CheckButton = style({
  position: 'absolute',
  top: '50%',
  right: '1rem',
  transform: 'translate3d(0, -50%, 0)',
  fontSize: '0.875rem',
  lineHeight: 1.2,
  color: vars.color['white-87'],
});

export const Item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const Label = style({
  color: vars.color['white-60'],
  fontSize: '0.9375rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.0375rem',
});

export const UnEditableItem = style({
  color: vars.color['white-87'],
  fontSize: '1.0625rem',
  letterSpacing: '-0.06375rem',
  fontWeight: 400,
  lineHeight: 1.2,
});
