import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

import {
  getHeaderAction
} from './store/actionCreators';

import {
  HeaderStyle,
  Navbar,
  DivContainer,
  ALogo,
  ImgLogo,
  DivCollapse,
  UlMainMenu,
  LiMenuItem,
  UlItemOrder,
  LiItemNav,
  AItemNav,
  ButtonNavBar
} from './style';

function Header(props) {
  const logo = {
    src: 'http://cdn.angelive.fun/logo.png',
    alt: 'Angelive'
  }

  const { headerList } = props;

  // 获取dispatch
  const {
    getHeaderDispatch
  } = props;

  useEffect(() => {
    getHeaderDispatch();
  }, [getHeaderDispatch]);

  // 遍历文章list
  const articleList = (list) => {
    return (
      list.map(item => (
        <LiMenuItem key={item.id}>
          <Link to={item.adGroupContextVo.linkUrl}
           alt={item.adGroupContextVo.remake}>
             {item.adGroupContextVo.title}
          </Link>
        </LiMenuItem>
      ))
    );
  }
  return (
    <HeaderStyle>
      <Navbar>
        <DivContainer className="container">
          <ALogo to="/" className="order-2">
            <ImgLogo logo={logo}></ImgLogo>
          </ALogo>
          <Hidden smDown>
            <DivCollapse className="order-2">
              <UlMainMenu>
                {
                  articleList(headerList)
                }
              </UlMainMenu>
              <UlItemOrder>
                <LiItemNav>
                  <AItemNav>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-moon"></use>
                    </svg>
                  </AItemNav>
                </LiItemNav>
                <LiItemNav>
                  <AItemNav>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-search"></use>
                    </svg>
                  </AItemNav>
                </LiItemNav>
                <LiItemNav>
                  <AItemNav>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-write"></use>
                    </svg>
                  </AItemNav>
                </LiItemNav>
              </UlItemOrder>
            </DivCollapse>
          </Hidden>

          <Hidden mdUp>
          <ButtonNavBar className="order-1">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-list"></use>
            </svg>
          </ButtonNavBar>
          <ButtonNavBar className="order-3">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-search"></use>
            </svg>
          </ButtonNavBar>
          </Hidden>
        </DivContainer>
      </Navbar>
    </HeaderStyle>
  );
}


const mapState = (state) => ({
  headerList: state.header.headerList
});

const mapDispatch = dispatch => {
  return {
    getHeaderDispatch() {
      dispatch(getHeaderAction());
    }
  }
};

export default connect(mapState, mapDispatch)(React.memo(Header));