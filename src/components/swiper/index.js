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
  DivGrid,
  DivPaper,
  DivListBody,
  DivListFooter,
  DivH2X,
  DivListDesc,
  AH2X,
  PTextLight,
  DivFooterText,
  AFooterCategory
} from './style';

function Swiper(props) {
  const { settings, swiperList } = props;

  const theme = {
    dark: true
  }

  // material-ui
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      square: true,
      elevation: 0
    },
  }));

  const swiperItem = (list) => {
    return (
      list.map(item => (
        <div className={useStyles.root} key={item.id}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={8}>
              <DivPaper className={useStyles.paper} elevation={0} square={true}>
                <DivMedia>
                  <AMedia image={React.$imgPath(item.adGroupContextVo.imgUrl)}/>
                </DivMedia>
              </DivPaper>
            </Grid>
            <DivGrid item xs={12} md={4} theme2={theme}>
              <DivPaper className={useStyles.paper} elevation={0} square={true}>
                <DivListContent className="flex-fill p-3 p-lg-5">
                  <DivListBody>
                    <DivH2X>
                      <AH2X>{item.adGroupContextVo.title}</AH2X>
                    </DivH2X>
                    <DivListDesc>
                      <PTextLight>
                        {item.adGroupContextVo.content}
                      </PTextLight>
                    </DivListDesc>
                  </DivListBody>
                  <DivListFooter>
                    <DivFooterText>
                      <span>
                        <AFooterCategory>推荐</AFooterCategory>
                      </span>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-line"></use>
                      </svg>
                      <time dateTime={item.adGroupContextVo.createTime}>{item.adGroupContextVo.createTime}</time>
                    </DivFooterText>
                  </DivListFooter>
                </DivListContent>
              </DivPaper>
            </DivGrid>
          </Grid>
        </div>
      ))
    )
  }

  return (
    <Slider {...settings}>
      {
        swiperItem(swiperList)
      }
    </Slider>
  );
}

export default React.memo(Swiper);