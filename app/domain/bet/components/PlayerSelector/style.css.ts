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
    position: 'relative',
    overflow: 'hidden',
  },
  variants: {
    status: {
      default: {
        borderColor: 'transparent',
        background: vars.color['bg-10'],
        opacity: 0.5,
      },
      selecting: {
        borderColor: vars.color['white-38'],
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.15) 100%)',
      },
      selected: {
        borderColor: 'transparent',
      },
    },
    university: {
      고려대학교: {},
      연세대학교: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        status: 'selected',
        university: '고려대학교',
      },
      style: {
        background: 'linear-gradient(180deg, rgba(243, 35, 60, 0.30) 0%, rgba(243, 35, 60, 0.15) 100%)',
      },
    },
    {
      variants: {
        status: 'selected',
        university: '연세대학교',
      },
      style: {
        background: 'linear-gradient(0deg, rgba(41, 72, 255, 0.15) 0%, rgba(41, 72, 255, 0.30) 100%)',
      },
    },
  ],
});

export const SelectedPlayerViewText = style({
  display: 'flex',
  flexDirection: 'column',
  color: vars.color['white-60'],
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '-0.035rem',
  zIndex: 10,
  position: 'absolute',
  top: '0.75rem',
  left: '0.75rem',
  alignItems: 'flex-start',
});
export const SelectedPlayerViewName = style({
  color: vars.color['white-87'],
  fontSize: '1rem',
  fontWeight: 500,
  letterSpacing: '-0.04rem',
});
export const SelectedPlayerViewImage = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  maxWidth: '8rem',
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

export const PlayerImageClipper = style({
  overflow: 'hidden',
  borderRadius: '0.625rem',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
  width: '100%',
});

export const PlayerItemImage = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '3rem',
    flexShrink: 0,
    borderRadius: '0.625rem',
    color: vars.color['white-87'],

    border: '1px solid',
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    isSelected: {
      true: {
        borderColor: vars.color.white,
        background: vars.color['white-38'],
      },
      false: {
        borderColor: 'transparent',
        background: vars.color['white-15'],
      },
    },
  },
});

export const PlayerImage = style({
  position: 'absolute',
  right: 0,
  bottom: 0,
  maxHeight: '3.875rem',
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

export const PositionStyle = style({
  color: vars.color['white-60'],
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '-0.03rem',
});

export const BackNumber = style({
  position: 'absolute',
  top: '0.125rem',
  left: '0.25rem',
  color: vars.color['white-87'],
  height: '1.4375rem',
  width: '1.375rem',
  flexShrink: 0,
  zIndex: 10,
  textShadow: '0 0.85px 8.5px rgba(0, 0, 0, 0.25)',
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: '-0.02rem',
  lineHeight: 1.2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CheckIcon = style({
  position: 'absolute',
  top: '0.375rem',
  left: '0.375rem',
  color: vars.color.white,
  zIndex: 10,
});

export const ButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const PlayerButton = recipe({
  base: {
    height: '2.875rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    background: vars.color['white-15'],
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '-0.04rem',
  },
  variants: {
    type: {
      profile: {
        width: '7.125rem',
        color: vars.color['white-87'],
      },
      select: {
        flex: '1 0 0',
        color: vars.color.white,
      },
      noPlayerSelect: {
        width: '100%',
        color: vars.color['bg-0'],
        background: vars.color.white,
      },
    },
    status: {
      고려대학교: {},
      연세대학교: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        type: 'select',
        status: '고려대학교',
      },
      style: {
        background: vars.color['red-gr-2'],
      },
    },
    {
      variants: {
        type: 'select',
        status: '연세대학교',
      },
      style: {
        background: vars.color['blue-gr-2'],
      },
    },
  ],
});
