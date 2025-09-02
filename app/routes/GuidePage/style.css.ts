import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const Title = style({
  color: vars.color['white-87'],
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '-0.045rem',
});

export const Contents = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.75rem',
  padding: '2.5rem 1.25rem',
});

// 반복 컴포넌트
export const GuideContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
});
export const Index = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.25rem',
  height: '1.25rem',
  background: vars.color.white,
  borderRadius: '100%',
  color: '#121212',
  fontSize: '0.75rem',
  fontWeight: 700,
  lineHeight: 1.5,
  fontFamily: vars.font.spoqaHanSansNeo,
});
export const GuideHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.75rem',
  fontFamily: vars.font.esamanru,
  textAlign: 'center',
  fontSize: '1.375rem',
  color: vars.color.white,
  fontWeight: 500,
  lineHeight: 1.4,
});
export const GuideDescription = style({
  color: vars.color['white-87'],
  fontFamily: vars.font.spoqaHanSansNeo,
  fontSize: '0.875rem',
  textAlign: 'center',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '-0.035rem',
});
export const DateText = style({
  color: '#E3DAFF',
  textAlign: 'center',
  fontSize: '0.875rem',
  fontWeight: 300,
  lineHeight: 1.6,
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
});
export const GuideImage = style({
  width: '100%',
});
export const Button = style({
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1.25rem',
  borderRadius: '6.1875rem',
  background:
    'linear-gradient(90deg, #58009E 0%, #9100D5 100%), linear-gradient(90deg, rgba(134, 0, 240, 0.80) -12.75%, rgba(70, 0, 183, 0.80) 113.73%)',
});

export const Guide3Date = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});
export const Token = style({
  display: 'flex',
  padding: '0.125rem 0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6.1875rem',
  background: 'rgba(227, 218, 255, 0.10)',
  color: '#E3DAFF',
  textAlign: 'center',
  fontSize: '0.875rem',
  fontWeight: '300',
  lineHeight: 1.6,
});

export const GameInstruction = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.625rem',
});

export const GameInstructionItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  justifyContent: 'center',
});

export const GameInstructionText = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.36rem',
  color: vars.color['white-87'],
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: '-0.04rem',
});
