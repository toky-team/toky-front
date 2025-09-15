import { vars } from '@/root.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  flexGrow: 1,
  overflowY: 'auto',
  background: vars.color['bg-5'],
});

export const RecordSummaryTitle = style({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: 1.5,
  letterSpacing: '-0.04rem',
  color: vars.color['white-87'],
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: '0 1.25rem',
  marginTop: '2rem',
});

export const RecordSummaryContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});
