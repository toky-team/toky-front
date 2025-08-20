import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'stretch',
  gap: '0.75rem',
});

export const Container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  width: '100%',
});

export const SelectedPlayerView = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 0',
    color: vars.color['white-60'],
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '-0.035rem',
    height: '7.6875rem',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',

    borderRadius: '0.75rem',
    border: '1px solid',

    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    status: {
      default: {
        borderColor: 'transparent',
        background: vars.color['bg-10'],
      },
      selecting: {
        borderColor: vars.color['white-38'],
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.15) 100%)',
      },
      selected: {},
    },
  },
});

export const UnivTitle = style({
  color: vars.color['white-87'],
});

export const PlayerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'stretch',
  padding: '1rem',
  borderRadius: '0.75rem',
  background: vars.color['bg-10'],
});

export const PlayerContainerHeader = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  color: vars.color['white-87'],
  fontSize: '1rem',
  fontWeight: 500,
  letterSpacing: '-0.04rem',
  lineHeight: 1.2,
});

export const MoreButton = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color['white-60'],
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '-0.035rem',
});

export const PlayerList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0.5rem 0.75rem',
});

export const PlayerItemContainer = style({
  height: '5.3125rem',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'flex-end',
  gap: '0.25rem',
  flexDirection: 'column',
});

export const PlayerItemImage = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '3rem',
    flexShrink: 0,
    background: vars.color['white-15'],
    borderRadius: '0.625rem',
    color: vars.color['white-87'],
  },
});

export const PlayerItemText = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    color: vars.color['white-87'],
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '-0.035rem',
  },
  variants: {
    isPlayer: {
      true: {
        justifyContent: 'space-between',
        padding: '0 0.125rem',
      },
      false: {
        justifyContent: 'center',
      },
    },
  },
});
