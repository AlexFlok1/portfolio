import React, { FC, MouseEventHandler } from 'react';
import * as S from './styles';

import { useHistory } from 'react-router-dom';

type BackButtonProps = {
  text: string;
  action?: MouseEventHandler<HTMLButtonElement>;
};

const BackButtonComponent: FC<BackButtonProps> = ({
  text = 'back',
  action,
}) => {
  const history = useHistory();
  return (
    <S.StyledBackButton
      onClick={
        action
          ? action
          : () => {
              history.push('/');
            }
      }
    >
      {text}
    </S.StyledBackButton>
  );
};

export default BackButtonComponent;
