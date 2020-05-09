import React from 'react';
import store from './store';
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import ScrollToTop from "./routes/scroll";
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { CommonStyle } from './assets/style/global-style';

import Header from './components/header';
import Footer from './components/footer';
import Arrow from './components/arrow';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CommonStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Header/>
        {/* 渲染匹配路径的路由组件 */}
        {renderRoutes(routes)}
        <Footer />
        <Arrow />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
