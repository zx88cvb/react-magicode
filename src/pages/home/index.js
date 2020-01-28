import React from 'react';
import { renderRoutes } from "react-router-config";
import {
  DivBanner,
  Main
} from './style';

function Home(props) {
  const { route } = props;
  return (
    <React.Fragment>
      <DivBanner>
        <div className="container"></div>
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