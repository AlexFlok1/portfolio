import React, { useEffect, useState } from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SkillBadgeComponent from '../Components/SkillComponent/SkillBadge';
import { Skills } from '../data/skills';
import BackButtonComponent from '../Components/Buttons/BackButton';

type Skill = {
  name: string;
  logo?: string;
};

const SkillsPage = () => {
  const [beSkills, setBeSkills] = useState<Skill[]>([]);
  const [feSkills, setFeSkills] = useState<Skill[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  useEffect(() => {
    setBeSkills(Skills.filter((skill) => skill.type === 'be'));
    setFeSkills(Skills.filter((skill) => skill.type === 'fe'));
  }, []);

  return (
    <>
      <Grid container style={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          textAlign='end'
          position='absolute'
          width='1'
          pt={2}
          pr={2}
        >
          <BackButtonComponent isWhite={isMobile} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} height={1}>
          <Box
            component='div'
            display='flex'
            alignItems='center'
            justifyContent='center'
            height={1}
            style={{
              background: 'linear-gradient(360deg, #1C1C1C 10%, #494949 360%)',
            }}
          >
            <Grid container alignItems='center' justifyContent='center'>
              {beSkills &&
                beSkills.length > 0 &&
                beSkills.map((skill) => (
                  <Grid
                    item
                    key={skill.name}
                    xl={3}
                    lg={3}
                    md={4}
                    sm={4}
                    xs={4}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <SkillBadgeComponent
                      skillName={skill.name}
                      logo={skill.logo}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} height={1}>
          <Box
            component='div'
            display='flex'
            alignItems='center'
            justifyContent='center'
            height={1}
          >
            <Grid container alignItems='center' justifyContent='center'>
              {feSkills &&
                feSkills.length > 0 &&
                feSkills.map((skill) => (
                  <Grid
                    key={skill.name}
                    item
                    xl={3}
                    lg={3}
                    md={4}
                    sm={4}
                    xs={4}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <SkillBadgeComponent
                      skillName={skill.name}
                      logo={skill.logo}
                      type='fe'
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SkillsPage;
