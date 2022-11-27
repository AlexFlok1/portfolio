import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const StyledBadgeWrapper = styled('div')(() => ({
  display: 'flex',
  padding: '2px',
  marginBottom: '20px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '110px',
}));

export const StyledBadgeText = styled('span')(() => ({
  display: 'inline-block',
  width: '100%',
  fontSize: '1.2rem',
  color: 'white',
  textAlign: 'center',
}));

export const StyledBadgePaper = styled(Paper)(() => ({
  display: 'flex',
  width: '100px',
  height: '100px',
  borderRadius: '24px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px',
}));
