import React from 'react';
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
    src: 'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2019/11/2019110410082940.png',
    alt: 'Angelive'
  }
  return (
    <HeaderStyle>
      <Navbar>
        <DivContainer>
          <ALogo className="order-2">
            <ImgLogo logo={logo}></ImgLogo>
          </ALogo>
          <Hidden smDown>
            <DivCollapse className="order-2">
              <UlMainMenu>
                <LiMenuItem>
                  <AMenuItem>主页</AMenuItem>
                </LiMenuItem>
                <LiMenuItem>
                  <AMenuItem>科技</AMenuItem>
                </LiMenuItem>
                <LiMenuItem>
                  <AMenuItem>主题</AMenuItem>
                </LiMenuItem>
                <LiMenuItem>
                  <AMenuItem>友情链接</AMenuItem>
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