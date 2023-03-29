import React, { FC, MouseEventHandler } from 'react';
import * as S from './styles';

import { useHistory } from 'react-router-dom';

type BackButtonProps = {
  text?: string;
  action?: MouseEventHandler<HTMLButtonElement>;
  isWhite?: boolean;
};

const BackButtonComponent: FC<BackButtonProps> = ({
  text = 'back',
  isWhite = false,
  action,
}) => {
  const history = useHistory();
  return (
    <S.StyledBackButton
      {...(isWhite && { style: { borderColor: 'white', color: 'white' } })}
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
