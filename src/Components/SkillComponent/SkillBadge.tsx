import React, { FC } from 'react';
import * as S from './styles';

type TSkillBadge = {
  skillName: string;
  type?: string;
  logo: string;
  description?: string;
};

const SkillBadgeComponent: FC<TSkillBadge> = ({
  skillName,
  logo,
  type,
  description,
}) => {
  return (
    <>
      <S.StyledBadgeWrapper>
        <S.StyledBadgePaper>
          <img style={{ width: '100%', height: '100%' }} src={logo} alt='' />
        </S.StyledBadgePaper>
        <S.StyledBadgeText isDark={type === 'fe'}>
          {skillName}
        </S.StyledBadgeText>
      </S.StyledBadgeWrapper>
    </>
  );
};

export default SkillBadgeComponent;
