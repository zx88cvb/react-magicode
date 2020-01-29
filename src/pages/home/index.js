import React from 'react';
import { renderRoutes } from "react-router-config";
import Swiper from 'components/swiper';
import {
  DivBanner,
  Main
} from './style';

function Home(props) {
  const { route } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <React.Fragment>
      <DivBanner>
        <div className="container">
          <Swiper settings={settings}></Swiper>
        </div>
      </DivBanner>
      <Main>
        <div className="container"></div>
      </Main>
      Home page
      { renderRoutes(route.routes) }
    </React.Fragment>
  );
}

export default React.memo(Home);