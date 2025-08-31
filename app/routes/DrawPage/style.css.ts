import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

export const GradientContainer = style({
  width: '100%',
  background: 'linear-gradient(90deg, #C33DEF -12.75%, #672BF3 113.73%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 1.25rem',
  gap: '2rem',
});

export const Header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  alignItems: 'center',
});

export const HeaderTitle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: vars.color['white-60'],
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: 1.5,
  letterSpacing: '-0.035rem',
});

export const InfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  alignItems: 'center',
  width: '100%',
});

export const InfoText = style({
  display: 'flex',
  gap: '0.1875rem',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '-0.03rem',
});
