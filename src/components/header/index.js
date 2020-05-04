import React from 'react';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import {
  HeaderStyle,
  Navbar,
  DivContainer,
  ALogo,
  ImgLogo,
  DivCollapse,
  UlMainMenu,
  LiMenuItem,
  AMenuItem,
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
                <LiMenuItem>
                  <Link to="/">主页</Link>
                </LiMenuItem>
                <LiMenuItem>
                  <Link to="/category/1">科技</Link>
                </LiMenuItem>
                <LiMenuItem>
                  <Link to="/category/25">主题</Link>
                </LiMenuItem>
                <LiMenuItem>
                  <Link to="/category/1">友情链接</Link>
                </LiMenuItem>
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

export default React.memo(Header);