import React from 'react';
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { Row, Col } from 'antd';

import {
  AMedia,
  DivMedia,
  DivListContent,
  DivGrid,
  DivPaper,
  DivTest,
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

  let history = useHistory();

  const handleClick = (uri) => {
    history.push(uri);
  }

  const swiperItem = (list) => {
    return (
      list.map(item => (
        <div key={item.id}>
          {/* <Grid container spacing={0}>
            <Grid item xs={12} md={8}>
              <DivPaper className={useStyles.paper} elevation={0} square={true}>
                <DivMedia onClick={() => handleClick(item.adGroupContextVo.linkUrl)}>
                  <AMedia image={React.$imgPath(item.adGroupContextVo.imgUrl)}/>
                </DivMedia>
              </DivPaper>
            </Grid>
            <DivGrid item xs={12} md={4} theme2={theme}>
              <DivPaper className={useStyles.paper} elevation={0} square={true}>
                <DivListContent className="flex-fill p-3 p-lg-5">
                  <DivListBody>
                    <DivH2X>
                      <AH2X onClick={() => handleClick(item.adGroupContextVo.linkUrl)}>{item.adGroupContextVo.title}</AH2X>
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
          </Grid> */}
          <Row>
            <Col xs={24} md={16}>
              <div>
                <DivMedia onClick={() => handleClick(item.adGroupContextVo.linkUrl)}>
                  <AMedia image={React.$imgPath(item.adGroupContextVo.imgUrl)}/>
                </DivMedia>
              </div>
            </Col>
            <Col xs={24} md={8} style={DivTest}>
              <DivPaper>
                <DivListContent className="flex-fill p-3 p-lg-5">
                  <DivListBody>
                    <DivH2X>
                      <AH2X onClick={() => handleClick(item.adGroupContextVo.linkUrl)}>{item.adGroupContextVo.title}</AH2X>
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
            </Col>
          </Row>
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