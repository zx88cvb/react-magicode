import React from 'react';
import {
  HeaderStyle,
  Navbar,
  DivContainer,
  ALogo,
  ImgLogo,
  DivCollapse,
  UlMainMenu
} from './style';

function Header(props) {
  return (
    <HeaderStyle>
      <Navbar>
        <DivContainer>
          <ALogo>
            <ImgLogo></ImgLogo>
          </ALogo>
          <DivCollapse>
            <UlMainMenu></UlMainMenu>
          </DivCollapse>
        </DivContainer>
      </Navbar>
    </HeaderStyle>
  );
}

export default React.memo(Header);