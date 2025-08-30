import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Image = style({
  maxWidth: '21.75rem',
  maxHeight: '27.625rem',
});

export const Container = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '1.25rem',
});

export const Header = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const BottomAction = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  alignSelf: 'stretch',
  padding: '0 1.25rem',
});

export const Button = recipe({
  base: {
    width: '100%',
    height: '2.875rem',
    borderRadius: '0.5rem',
  },
  variants: {
    color: {
      primary: {
        background: vars.color['bg-10'],
      },
      secondary: {
        background: 'linear-gradient(90deg, #58009E 0%, #9100D5 100%)',
      },
    },
  },
});

export const HeaderText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  color: vars.color['white-87'],
  fontSize: '1.5rem',
  lineHeight: 1.6,
  fontWeight: 500,
  letterSpacing: '-0.06rem',
});

export const Description = style({
  color: vars.color['white-60'],
  fontSize: '1.125rem',
  fontWeight: 400,
  letterSpacing: '-0.045rem',
  textAlign: 'center',
});
