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
  const { settings } = props;

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
  return (
    <Slider {...settings}>
      {/* <DivGutters className="row">
        <h3>1</h3>
        <h3>1222</h3>
      </DivGutters> */}
      <div className={useStyles.root}>
        <Grid container spacing={0} style={{borderRadius: '.25rem'}}>
          <Grid item xs={12} md={8}>
            <DivPaper className={useStyles.paper}>
              <DivMedia>
                <AMedia />
              </DivMedia>
            </DivPaper>
          </Grid>
          <DivGrid item xs={12} md={4} theme2={theme}>
            <DivPaper className={useStyles.paper}>
              <DivListContent className="flex-fill p-3 p-lg-5">
                <DivListBody>
                  <DivH2X>
                    <AH2X>5 年估值 80 亿美金，寻找中国版 Peloton | 36氪新风向</AH2X>
                  </DivH2X>
                  <DivListDesc>
                    <PTextLight>
                    编者按：本文来自微信公众号“IPO那点事”（ID：ipopress），作者 亚轩，数据支持 勾股大数据；36氪经授权发布...
                    </PTextLight>
                  </DivListDesc>
                </DivListBody>
                <DivListFooter>
                  <DivFooterText>
                    <span>
                      <AFooterCategory>生活</AFooterCategory>
                    </span>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-line"></use>
                    </svg>
                    <time dateTime="2020-01-30 15:13:47">2020-01-30</time>
                  </DivFooterText>
                </DivListFooter>
              </DivListContent>
            </DivPaper>
          </DivGrid>
        </Grid>
      </div>
      <div className={useStyles.root}>
        <Grid container spacing={0} style={{borderRadius: '.25rem'}}>
          <Grid item xs={12} md={8}>
            <DivPaper className={useStyles.paper}>
              <DivMedia>
                <AMedia />
              </DivMedia>
            </DivPaper>
          </Grid>
          <DivGrid item xs={12} md={4} theme2={theme}>
            <DivPaper className={useStyles.paper}>
              <DivListContent className="flex-fill p-3 p-lg-5">
                <DivListBody>
                  <DivH2X>
                    <AH2X>5 年估值 80 亿美金，寻找中国版 Peloton | 36氪新风向</AH2X>
                  </DivH2X>
                  <DivListDesc>
                    <PTextLight>
                    编者按：本文来自微信公众号“IPO那点事”（ID：ipopress），作者 亚轩，数据支持 勾股大数据；36氪经授权发布...
                    </PTextLight>
                  </DivListDesc>
                </DivListBody>
                <DivListFooter>
                  <DivFooterText>
                    <span>
                      <AFooterCategory>生活</AFooterCategory>
                    </span>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-line"></use>
                    </svg>
                    <time dateTime="2020-01-30 15:13:47">2020-01-30</time>
                  </DivFooterText>
                </DivListFooter>
              </DivListContent>
            </DivPaper>
          </DivGrid>
        </Grid>
      </div>
    </Slider>
  );
}

export default React.memo(Swiper);