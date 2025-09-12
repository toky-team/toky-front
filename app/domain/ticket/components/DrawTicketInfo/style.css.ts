import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  width: '100%',
  borderRadius: '0.625rem',
  background: 'rgba(0, 0, 0, 0.30)',
  backdropFilter: 'blur(5px)',
  padding: '1rem 1.06rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.75rem',
});

export const TicketInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  alignItems: 'center',
});

export const TicketHistory = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color['white-87'],
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.035rem',
});

export const TicketCount = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color.white,
  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '-0.06rem',
  gap: '0.25rem',
});

export const DrawHistory = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  color: vars.color['white-87'],
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.035rem',
  width: '100%',
  alignItems: 'center',
});

export const ItemsList = style({
  display: 'flex',
  overflowX: 'auto',
  width: '100%',
  padding: '1rem',
  alignItems: 'center',
  gap: '1rem',
  borderRadius: '0.5rem',
  background: 'rgba(255, 255, 255, 0.10)',
});

export const SignupText = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.5rem',
  background: 'rgba(255, 255, 255, 0.10)',
  padding: '1rem',
});

export const Item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  width: '4.375rem',
  textAlign: 'center',
  color: vars.color.white,
  fontSize: '1.125rem',
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '-0.045rem',
});

export const ItemName = style({
  color: vars.color['white-87'],
  fontSize: '0.875rem',
  textOverflow: 'ellipsis',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.035rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});
