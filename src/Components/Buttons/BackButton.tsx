import React, { FC, MouseEventHandler } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

import { useHistory } from 'react-router-dom';

const StyledBackButton = styled(Button)({
  textTransform: 'uppercase',
  color: '#302f2e',
  fontFamily: 'Oswald',
  border: '1px solid #302f2e',
  borderRadius: 0,
});

type BackButtonProps = {
  text?: string;
  action?: MouseEventHandler<HTMLButtonElement>;
};

const BackButtonComponent: FC<BackButtonProps> = ({
  text = 'back',
  action,
}) => {
  const history = useHistory();
  return (
    <StyledBackButton
      onClick={
        action
          ? action
          : () => {
              history.push('/');
            }
      }
    >
      {text}
    </StyledBackButton>
  );
};

export default BackButtonComponent;
