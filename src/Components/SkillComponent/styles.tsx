import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

type StyledBadgeTextPropsT = {
  isDark?: boolean;
};

export const StyledBadgeWrapper = styled('div')(() => ({
  display: 'flex',
  padding: '2px',
  marginBottom: '20px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '110px',
}));

export const StyledBadgeText = styled('span')(
  ({ isDark = false }: StyledBadgeTextPropsT) =>
    () => ({
      display: 'inline-block',
      width: '100%',
      fontSize: '1.1rem',
      color: isDark ? 'black' : 'white',
      textAlign: 'center',
      marginTop: '20px',
    })
);

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
    borderRadius: '20px',
  },
}));
