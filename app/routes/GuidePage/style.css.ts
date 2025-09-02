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
});
export const GuideTitle = style({});
export const GuideDescription = style({});
export const DateText = style({});
export const Button = style({});
