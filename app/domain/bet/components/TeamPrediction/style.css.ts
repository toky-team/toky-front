import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  display: 'flex',
  alignItems: 'stretch',
  gap: '0.125rem',
  width: '100%',
});

export const ButtonContainer = style({
  position: 'relative',
  flex: '1 0 0',
});

export const BetButton = recipe({
  base: {
    width: '100%',
    height: '4.1875rem',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    lineHeight: 1.2,
    color: vars.color.white,
  },
  variants: {
    position: {
      left: {
        borderRadius: '0.625rem 0 0 0.625rem',
      },
      center: {},
      right: {
        borderRadius: '0 0.625rem 0.625rem 0',
      },
    },
    isMyAnswer: {
      true: {},
      false: {},
    },
    isAnswered: {
      true: {
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '-0.045rem',
      },
      false: {
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '-0.03rem',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        isAnswered: true,
        isMyAnswer: false,
      },
      style: {
        color: vars.color['white-38'],
      },
    },
  ],
});

export const ButtonGradient = recipe({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  variants: {
    type: {
      default: {
        background: vars.color['bg-14'],
      },
      selected: {},
      nonSelected: {
        background: vars.color['bg-3'],
      },
    },
    position: {
      left: {},
      center: {},
      right: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        type: 'selected',
        position: 'left',
      },
      style: {
        background: 'linear-gradient(90deg, #F3233C 0%, rgba(243, 35, 60, 0.25) 100%)',
      },
    },
    {
      variants: {
        type: 'selected',
        position: 'center',
      },
      style: {
        background:
          'linear-gradient(90deg, rgba(76, 14, 176, 0.60) -12.75%, #4C0EB0 38.63%, #4C0EB0 60.71%, rgba(76, 14, 176, 0.60) 113.73%)',
      },
    },
    {
      variants: {
        type: 'selected',
        position: 'right',
      },
      style: {
        background: vars.color['blue-gr-2'],
      },
    },
  ],
});

export const StickerWrapper = style({
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -48.5%, 0)',
});

export const PercentageWrapper = recipe({
  base: {
    display: 'flex',
    gap: '0.125rem',
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontWeight: 700,
  },
  variants: {
    isMyAnswer: {
      true: {
        color: vars.color.white,
      },
      false: {
        color: '#3C3C3C',
      },
    },
  },
});

export const PercentageNumber = recipe({
  base: {
    fontSize: '1.875rem',
    WebkitTextStrokeWidth: '0.5px',
    letterSpacing: '-0.1875rem',
    lineHeight: 1.2,
  },
  variants: {
    isMyAnswer: {
      true: {
        WebkitTextStrokeColor: vars.color.white,
      },
      false: {
        WebkitTextStrokeColor: '#3C3C3C',
      },
    },
  },
});

export const PercentageText = style({
  height: '1.75rem',
  letterSpacing: '-0.045rem',
  fontSize: '0.75rem',
});
