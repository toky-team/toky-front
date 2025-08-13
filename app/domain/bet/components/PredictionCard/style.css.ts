import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const ShareCardWrapper = style({
  width: '400px',
  height: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color['bg-0'],
});
export const ShareCard = recipe({
  base: {
    position: 'relative',
    borderRadius: '15px',
    width: '289px',
    height: '430px',
    flexShrink: 0,
    color: 'white',
    backgroundColor: 'transparent',
  },
  variants: {
    predictionResult: {
      KOREA: {
        color: '#f3233c',
      },
      YONSEI: {
        color: '#2948ff',
      },
      DRAW: {
        color: '#4c0eb0',
      },
    },
  },
});
export const UserContainer = recipe({
  base: {
    zIndex: 1002,
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%,0)',
    width: '207px',
    height: '26px',
    borderRadius: '26px',
    marginTop: '30px',
    lineHeight: '27px',
    background: vars.color['white-60'],
    textAlign: 'center',
  },
  variants: {
    predictionResult: {
      KOREA: {
        color: '#f3233c',
      },
      YONSEI: {
        color: '#2948ff',
      },
      DRAW: {
        color: '#4c0eb0',
      },
    },
  },
});
export const ScoreContainer = style({
  zIndex: 1001,
  width: '220px',
  position: 'absolute',
  top: '13%',
  left: '50%',
  transform: 'translate(-50%,0)',
  marginTop: '17px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});
export const UnivName = style({
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: 1.2,
  letterSpacing: '-0.48px',
  color: 'white',
});
export const ScoreWrapper = style({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
});
export const ScoreBox = recipe({
  base: {
    width: '34px',
    borderRadius: '4px',
    padding: '3px 0px 1px 0px',
    textAlign: 'center',
    fontSize: '38px',
    fontWeight: 900,
    lineHeight: '38px',
    background: vars.color['white-87'],
  },
  variants: {
    predictionResult: {
      KOREA: {
        color: '#f9555e',
      },
      YONSEI: {
        color: '#445fff',
      },
      DRAW: {
        color: '#4c0eb0',
      },
    },
  },
});
export const Colon = style({
  textAlign: 'center',
  fontSize: '35px',
  fontWeight: 700,
  textShadow: '1px 1px 9px rgba(0, 0, 0, 0.5)',
  color: vars.color['white-87'],
});

export const ShareFooter = style({
  position: 'absolute',
  width: '100%',
  left: '50%',
  bottom: '20px',
  transform: 'translate(-50%,0)',
  zIndex: 1002,
  display: 'flex',
  justifyContent: 'center',
  gap: '7px',
  color: vars.color['white-87'],
  textAlign: 'center',
  fontSize: '10px',
  fontWeight: '500',
  letterSpacing: '-0.6px',
  textShadow: '1px 1px 6px rgba(0, 0, 0, 0.3)',
});
export const CharacterImage = style({
  width: '289px',
  verticalAlign: 'bottom',
  zIndex: 1000,
  borderRadius: '15px',
  position: 'absolute',
  bottom: 0,
});
