import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import {
  AMedia,
  DivMedia,
  DivListContent,
  DivPaper
} from './style';

function Swiper(props) {
  const { settings } = props;

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
  return (
    <Slider {...settings}>
      {/* <DivGutters className="row">
        <h3>1</h3>
        <h3>1222</h3>
      </DivGutters> */}
      <div className={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <DivPaper className={useStyles.paper}>
              <DivMedia>
                <AMedia>123</AMedia>
              </DivMedia>
            </DivPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <DivPaper className={useStyles.paper}>
              <DivListContent className="flex-fill p-3 p-lg-5"></DivListContent>
            </DivPaper>
          </Grid>
        </Grid>
      </div>
      <div className={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <DivPaper className={useStyles.paper}>
              <DivMedia>
                <AMedia></AMedia>
              </DivMedia>
            </DivPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <DivPaper className={useStyles.paper}>
              <DivListContent className="flex-fill p-3 p-lg-5"></DivListContent>
            </DivPaper>
          </Grid>
        </Grid>
      </div>
    </Slider>
  );
}

export default React.memo(Swiper);