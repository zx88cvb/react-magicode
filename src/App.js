import React from 'react';
import store from './store';
import { renderRoutes } from "react-router-config";
import routes from "./routes/index.js";
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { GlobalStyle } from './style';

import Header from './components/header';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Header/>
        {/* 渲染匹配路径的路由组件 */}
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
