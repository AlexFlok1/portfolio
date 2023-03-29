import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  fontSize: '1.1rem',
  color: 'white',
  textAlign: 'center',
  marginTop: '20px',
}));

export const StyledBadgePaper = styled(Paper)(() => ({
  display: 'flex',
  width: '100px',
  height: '100px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px',
  borderRadius: 0,
  transition: 'all .4s ease',

  '&:hover': {
    transform: 'rotateZ(45deg)',
  },
}));
