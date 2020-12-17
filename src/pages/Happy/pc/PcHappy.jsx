import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { ThemeProvider } from '@material-ui/styles';
import happiness from '../../../images/happiness.png';
import health from '../../../images/health.png';
import security from '../../../images/security.png';
import environment from '../../../images/environment.png';
import economy from '../../../images/economy.png';
import education from '../../../images/education.png';
import relationship from '../../../images/relationship.png';
import leisure from '../../../images/leisure.png';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'NanumSquareRoundR'
    ].join(','),
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '5%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '80%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function PcHappy() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={5}>
        <div style={{
          marginLeft: "10%",
          width: '80%',
          textAlign:'left',
          fontFamily: "NanumSquareRoundR",
          fontWeight: 'bold',
          fontSize: '300%',
          color: '#4770B3'
        }}>
            <p>"행복"이란?</p>
        </div>
        <div style={{
          marginLeft: "10%",
          width: '80%',
          textAlign:'left',
          fontFamily: "NanumSquareRoundR",
          fontSize: '150%',
          color: '##50AED3',
          whiteSpace : "pre-wrap"
        }}>
            대한민국 전문가들이 정의한<br/>
            오른쪽에 보이는 행복의 구성요소를<br/>
            그 가중치에 따라 합한 숫자로 정의됩니다.<br/>
            <br/>
            <img src="http://www.happykorea.re.kr/about/img/about_img_1_1.gif" width='100%'/>
            <br/>
            <img src={happiness} width='100%'/>
        </div>
      </Grid>
      <Grid item xs={7}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={health} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" fontFamily="NanumSquareRoundR">
                        1. 건강
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        주관적 건강수준 인지율                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 십만명당 정신건강증진기관 수                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary" fontFamily="NanumSquareRoundR">
                        인구 천명당 의료기관 종사 의사수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        건강생활실천율                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 천명당 의료기관병상수                  
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">가중치: 0.338</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={security} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        2. 안전
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        사회안전에 대한 인식                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 천명당 CCTV 대수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 십만명당 응급의교기관 및 응급실 운영기관수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        단위면적당 지역경찰관서 수                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        지역안전등급 현황 중 '교통사고 및 화재'                  
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">가중치: 0.150</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={environment} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        3. 환경
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        환경체감도                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 천명당 1일 산업폐수 방류량
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        도시지역 중 '녹색지역 비율'
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        미세먼지(PM2.5)                 
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        주민 1인당 생활폐기물배출량
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">가중치: 0.100</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={economy} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        4. 경제
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        1인당 지역내총생산(GRDP)                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 천명당 사업체수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 천명당 종사자수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        국민기초생활보장 수급자비율                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        종사자 천명당 영세자영업자 수
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">가중치: 0.168</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={education} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        5. 교육
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        학업성취도(기초학력미달)                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        교원 1인당 학생수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        영유아 천명당 보육시설 수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 십만명당 학교수                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 천명당 사설학원
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">가중치: 0.098</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={relationship} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        6. 관계 및 사회참여
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 십만명당 자살률                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        1인가구(독거노인 제외) 비율
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        독거노인가구 비율
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 십만명당 사회적기업수          
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        가족관계 만족                  
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">가중치: 0.080</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={leisure} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        7. 여가
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        여가활용 만족도
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        노인 천명당 노인여가복지시설수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 십만명당 도서관수
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 십만명당 문화기반시설수                  
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        인구 천명당 체육관련 여가시설                 
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">가중치: 0.056</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          </Grid>
          </Grid>
      </Grid>
    </div>
    </ThemeProvider>
    );
}

export default PcHappy;
