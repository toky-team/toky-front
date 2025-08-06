import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const ButtonsLayout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  alignItems: 'stretch',
});

export const TotalButton = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    overflow: 'hidden',
    height: '3.1875rem',
    borderRadius: '0.5rem',
    padding: '0 1rem',

    position: 'relative',
    transition: 'background 0.2s ease-in-out',

    color: vars.color['white-87'],
    fontSize: '0.9375rem',
    letterSpacing: '-0.0375rem',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  variants: {
    selected: {
      true: {
        background: vars.color.purple,
      },
    },
  },
});
export const ButtonBackground = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,

  background: vars.color['bg-5'],
});

export const TermButtonLayout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0 1rem',
});

export const Highlight = style({
  color: vars.color['white-87'],
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '-0.03rem',
});

export const Numbering = style({
  display: 'flex',
  gap: '2px',
});

export const Heading = style({
  color: vars.color['white-60'],
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '-0.03rem',
});
