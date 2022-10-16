import './SkillsComponent.css';
import { Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

//import some subcomponents
import BackButtonComponent from '../Buttons/BackButton';

const SkillsComponent = () => {
  const [radardata, setRadardata] = useState(null);
  const [options, setOptions] = useState(null);
  const [backskills, setBackskills] = useState(null);
  const [hoverBlock, setHoverBlock] = useState(null);

  useEffect(() => {
    setRadardata({
      labels: [
        'HTML',
        'CSS (Bootstrap)',
        'React JS',
        'Angualr 8+',
        'THREE JS',
        'Chart JS',
        'React Material UI',
      ],
      datasets: [
        {
          label: 'Knowladge',
          data: [90, 90, 85, 60, 45, 80, 70],
          fill: true,
          backgroundColor: 'rgba(245, 223, 77, 0.2)',
          borderColor: 'rgb(245, 223, 77)',
          pointBackgroundColor: 'rgb(56, 56, 56)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
      ],
    });

    setOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scale: {
        max: 100,
        min: 0,
        stepSize: 25,
      },
    });

    setBackskills([
      {
        name: 'Node JS',
        skills: ['Socekt I/O', 'Scheduler', 'JWT', 'Express JS'],
      },
      {
        name: 'Data Base',
        skills: ['MSSQL', 'Sequlizer', 'GraphQL', 'Mongo DB'],
      },
    ]);

    return () => {};
  }, []);

  return (
    <>
      <Grid container height='100vh' width='1'>
        <Grid height='0.1' item xs={12} p={2} textAlign='right'>
          <BackButtonComponent />
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          pl={2}
          pb={2}
          pt={2}
          height='0.9'
          sx={{
            paddingRight: {
              xl: 0,
              lg: 0,
              md: 0,
              sm: '16px',
              xs: '16px',
            },
          }}
        >
          <Paper
            style={{ height: '100%', width: '100%', background: '#383838' }}
          >
            <Grid
              container
              alignContent='center'
              justifyContent='center'
              height='1'
            >
              <Grid item xl={6} lg={6} md={6} sm={6} xs={11} height='0.3'>
                <p
                  style={{
                    color: 'white',
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '3rem',
                    fontWeight: '200!important',
                  }}
                >
                  BACKEND KNOWLADGE
                </p>
              </Grid>
              <Grid item xs={11}>
                <hr />
              </Grid>
              <Grid
                item
                xs={11}
                height='0.7'
                alignContent='center'
                justifyContent='center'
              >
                <Grid
                  container
                  alignContent='center'
                  justifyContent='center'
                  height='1'
                  width='1'
                >
                  <Grid
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={10}
                    xs={11}
                    sx={{
                      height: {
                        xl: 1,
                        lg: 1,
                        md: 1,
                        sm: 0.5,
                        xs: 0.5,
                      },
                    }}
                  >
                    <Paper
                      className='backskill'
                      onMouseEnter={() => {
                        setHoverBlock(1);
                      }}
                      onMouseLeave={() => {
                        setHoverBlock(null);
                      }}
                      sx={{
                        height: {
                          xl: 0.6,
                          lg: 0.6,
                          md: 0.6,
                          sm: 0.9,
                          xs: 0.9,
                        },
                      }}
                    >
                      <span className={'backend_skill'}>Database</span>
                      <div
                        className={
                          hoverBlock === 1
                            ? 'details-block details-block-hover'
                            : 'details-block'
                        }
                      >
                        <List>
                          {backskills &&
                            backskills[1].skills.map((skill, indx) => (
                              <ListItem key={indx}>
                                <ListItemText primary={skill} />
                              </ListItem>
                            ))}
                        </List>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xl={1} lg={1} md={1}></Grid>
                  <Grid
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={10}
                    xs={11}
                    sx={{
                      height: {
                        xl: 1,
                        lg: 1,
                        md: 1,
                        sm: 0.5,
                        xs: 0.5,
                      },
                    }}
                  >
                    <Paper
                      className='backskill'
                      onMouseEnter={() => {
                        setHoverBlock(2);
                      }}
                      onMouseLeave={() => {
                        setHoverBlock(null);
                      }}
                      sx={{
                        height: {
                          xl: 0.6,
                          lg: 0.6,
                          md: 0.6,
                          sm: 0.9,
                          xs: 0.9,
                        },
                      }}
                    >
                      <span className={'backend_skill'}>Node JS</span>
                      <div
                        className={
                          hoverBlock === 2
                            ? 'details-block details-block-hover'
                            : 'details-block'
                        }
                      >
                        <List>
                          {backskills &&
                            backskills[0].skills.map((skill, indx) => (
                              <ListItem key={indx}>
                                <ListItemText
                                  style={{ fontFamily: "'Oswald', sans-serif" }}
                                  primary={skill}
                                />
                              </ListItem>
                            ))}
                        </List>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          pr={2}
          pb={2}
          pt={2}
          height='0.9'
        >
          <Grid
            container
            alignContent='center'
            justifyContent='center'
            height='1'
          >
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={11}
              alignContent='center'
              justifyContent='center'
              style={{ height: '30%' }}
            >
              <p
                style={{
                  color: '#383838',
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '3rem',
                  fontWeight: '200!important',
                }}
              >
                FRONTEND KNOWLADGE
              </p>
            </Grid>
            <Grid item xs={11} style={{ height: '70%' }}>
              <Paper style={{ height: '100%', width: '100%' }}>
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    padding: '5%',
                    boxSizing: 'border-box',
                  }}
                >
                  {radardata && (
                    <Radar
                      height='1'
                      width='1'
                      data={radardata}
                      options={options}
                    />
                  )}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SkillsComponent;
