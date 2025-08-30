import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

export const Header = style({
  background: '#1F1F1F',
  flexShrink: 0,
  width: '100%',
});

export const Title = style({
  color: vars.color['white-87'],
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '-0.0675rem',
});

export const List = style({
  flexGrow: 1,
  padding: '0.25rem 1.25rem 2rem 1.25rem',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

export const Item = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  paddingTop: '1rem',
  paddingBottom: '0.9375rem',
  borderBottom: `0.5px solid ${vars.color['white-15']}`,
  overflow: 'hidden',
  gap: '0.5rem',
});

export const LeftSide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  color: vars.color['white-38'],
  fontSize: '0.6875rem',
  fontWeight: 400,
  lineHeight: 1.2,
});

export const ItemTitle = style({
  color: vars.color.white,
  fontSize: '0.9375rem',
  fontWeight: 400,
  lineHeight: 1.2,
  wordBreak: 'keep-all',
});

export const RightSide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',
  color: vars.color.white,
  textAlign: 'right',
  alignItems: 'flex-end',
  fontSize: '1.0625rem',
  fontWeight: 500,
  lineHeight: 1.2,
  flexShrink: 0,
});

export const ResultAmount = style({
  color: vars.color['white-38'],
  fontSize: '0.6875rem',
  lineHeight: 1.2,
  fontWeight: 400,
});
