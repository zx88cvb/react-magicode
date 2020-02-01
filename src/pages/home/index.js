import React from 'react';
import { renderRoutes } from "react-router-config";
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Swiper from 'components/swiper';
import List from 'components/list'
import Sidebar from 'components/sidebar'
import {
  DivBanner,
  Main,
  DivListNav,
  ButtonNav,
  DivPaper
} from './style';

function Home(props) {
  const { route } = props;

  // material-ui
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };
  return (
    <React.Fragment>
      <DivBanner>
        <div className="container">
          <Swiper settings={settings}></Swiper>
        </div>
      </DivBanner>
      <Main>
        <div className="container">
          {/* <div className="row"> */}
            <div className={useStyles.root}>
              <Grid container spacing={3}>
                <Grid item lg={8}>
                  <DivPaper className={useStyles.paper} elevation={0}>
                    <DivListNav>
                      <ul>
                        <li>
                          <ButtonNav className="current">推荐</ButtonNav>
                        </li>
                        <li>
                          <ButtonNav>新闻</ButtonNav>
                        </li>
                      </ul>
                    </DivListNav>
                    <List />
                  </DivPaper>
                </Grid>
                <Hidden smDown>
                  <Grid item lg={4}>
                    <DivPaper className={useStyles.paper} elevation={0}>
                      <Sidebar />
                    </DivPaper>
                  </Grid>
                </Hidden>
              </Grid>
            </div>
          {/* </div> */}
        </div>
      </Main>
      { renderRoutes(route.routes) }
    </React.Fragment>
  );
}

export default React.memo(Home);