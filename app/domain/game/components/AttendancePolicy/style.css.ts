import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  padding: '2rem 1.25rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.5rem',
  alignSelf: 'stretch',
});

export const Item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const Text = style({
  color: vars.color['white-87'],
  fontSize: '0.9375rem',
  fontWeight: 500,
  lineHeight: 1.6,
  letterSpacing: '-0.0375rem',
});

export const Description = style({
  color: vars.color['white-60'],
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '-0.035rem',
});

export const Index = style({
  display: 'flex',
  width: '1.125rem',
  height: '1.125rem',
  padding: '0.0625rem 0.25rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.375rem',
  background: vars.color['bg-7'],
  marginTop: '0.25rem',
});

export const Title = style({
  color: vars.color['white-87'],
  fontSize: '1rem',
  fontWeight: 800,
  lineHeight: 1.6,
  letterSpacing: '-0.04rem',
});

export const TextWrapper = style({
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'flex-start',
});

export const DescriptionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8125rem',
  paddingRight: '0.25rem',
});

export const Index2Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});
