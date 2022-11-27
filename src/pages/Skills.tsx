import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import SkillBadgeComponent from '../Components/SkillComponent/SkillBadge';
import { Skills } from '../data/skills';

type Skill = {
  name: string;
  logo?: string;
};

const SkillsPage = () => {
  const [beSkills, setBeSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setBeSkills(Skills.filter((skill) => skill.type === 'be'));
  }, []);

  return (
    <>
      <Grid container style={{ height: '100vh' }}>
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
                    xs={3}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <SkillBadgeComponent skillName={skill.name} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} height={1}>
          <Box component='div'>FrontEnd</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SkillsPage;
