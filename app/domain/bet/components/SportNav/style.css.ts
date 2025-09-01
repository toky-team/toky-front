import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: 10,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0.75rem 1.25rem',
  background:
    'linear-gradient(90deg, rgba(76, 14, 176, 0.40) -12.75%, rgba(76, 14, 176, 0.24) 113.73%), linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212',
});

export const SportSelector = recipe({
  base: {
    position: 'relative',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '-0.04rem',
    transition: 'color 0.2s ease-in-out',
  },
  variants: {
    isSelected: {
      true: {
        color: vars.color['white-87'],
      },
      false: {
        color: vars.color['white-38'],
      },
    },
  },
});
export const UnderBar = style({
  position: 'absolute',
  bottom: '-0.75rem',
  left: 0,
  right: 0,
  height: '0.125rem',
  background: vars.color['white-87'],
  borderTopLeftRadius: '0.125rem',
  borderTopRightRadius: '0.125rem',
});
