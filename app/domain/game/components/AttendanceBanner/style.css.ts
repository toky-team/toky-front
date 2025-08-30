import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Wrapper = style({
  position: 'relative',
  width: '100%',
  background: 'linear-gradient(0deg, rgba(59, 0, 225, 0.00) 34.53%, rgba(59, 0, 225, 0.15) 100%), #121212',
});

export const Container = style({
  width: '100%',
  padding: '2rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.875rem',
});

export const Title = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  color: vars.color['white-87'],
  textAlign: 'center',
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: 1.6,
  letterSpacing: '-0.04rem',
  position: 'relative',
});

export const ImageUnder = style({
  zIndex: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
});

export const ImageOn = style({
  zIndex: 1,
});

export const GameButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '0 1.25rem',
  zIndex: 3,
});

export const TicketWrapper = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontWeight: 500,
  lineHeight: 1.6,
  letterSpacing: '-0.035rem',
  fontSize: '0.875rem',
  gap: '0.5rem',
});

export const GameButton = recipe({
  base: {
    borderRadius: '0.5rem',
    width: '100%',
    height: '2.875rem',
    padding: '0.75rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    disabled: {
      true: {
        background: 'rgba(255, 255, 255, 0.10)',
      },
      false: {
        background: 'linear-gradient(90deg, #58009E 0%, #9100D5 100%)',
      },
    },
  },
});

export const CalendarWrapper = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  rowGap: '0.5rem',
  columnGap: '1.12rem',
  padding: '0 3.125rem',
  paddingTop: '1.87rem',
  paddingBottom: '2rem',
});

export const CalendarItem = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: vars.color['white-87'],
    textAlign: 'center',
    fontSize: '0.8125rem',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '-0.0325rem',
    width: '1.625rem',
    height: '1.625rem',
    borderRadius: '6.1875rem',
  },
  variants: {
    variant: {
      today: {
        border: '1px solid',
        borderColor: vars.color['white-87'],
      },
      isAttended: {
        backgroundColor: '#C33DEF',
      },
    },
  },
});
