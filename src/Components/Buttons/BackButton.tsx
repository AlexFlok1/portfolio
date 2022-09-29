import React, { FC } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledBackButton = styled(Button)({});

type BackButtonProps = {
  text: string;
};

const BackButtonComponent: FC<BackButtonProps> = (props) => {
  return <StyledBackButton>{props.text}</StyledBackButton>;
};

export default BackButtonComponent;
