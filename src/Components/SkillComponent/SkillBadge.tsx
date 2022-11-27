import React, { FC } from 'react';

import * as S from './styles';

type TSkillBadge = {
  skillName: string;
  type?: string;
  description?: string;
};

const SkillBadgeComponent: FC<TSkillBadge> = ({
  skillName,
  type,
  description,
}) => {
  return (
    <>
      <S.StyledBadgeWrapper>
        <S.StyledBadgePaper>Logo</S.StyledBadgePaper>
        <S.StyledBadgeText>{skillName}</S.StyledBadgeText>
      </S.StyledBadgeWrapper>
    </>
  );
};

export default SkillBadgeComponent;
