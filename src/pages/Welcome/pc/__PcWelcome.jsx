import React from 'react';
import TextBtn from './components/TextBtn';
import Background from '../../../images/bg.png';
import Typical from 'react-typical';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const PcWelcome = () => {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
          <Grid container spacing={1}>
            <Grid item xs={12} container>
              <div style={{
                height: '20%',
              }}>
              </div>
            </Grid>
            <Grid item xs={1} container>
            </Grid>
            <Grid item xs={6} container>
              <Grid item xs container direction="column" justify="flex-start" alignItems="flex-start" spacing={1}>
                <Grid>
                  <Typography gutterBottom variant="subtitle1" fontFamily="NanumSquareRoundR">
                    <div style={{
                        textAlign:'left',
                        fontFamily: "NanumSquareRoundR",
                        fontWeight: 'bold',
                        fontSize: '400%',
                        color: '#4770B3',
                    }}>
                        행복
                    </div>
                  </Typography>
                </Grid>
                <Grid>
                  <div style={{
                      textAlign:'left',
                      fontFamily: "NanumSquareRoundR",
                      fontSize: '250%',
                      color: '##50AED3',
                  }}>
                      <Typical
                          steps={['살(Buy, Live)', 1500, '살(Buy, Live) 수 있을까?', 1000]}
                          loop={Infinity}
                          wrapper="p"
                      />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <TextBtn></TextBtn>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
            </Grid>
          </Grid>
        </div>
    );
};

export default PcWelcome;
