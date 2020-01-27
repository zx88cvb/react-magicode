import styled from 'styled-components';
import style from '../../assets/style/global-style';

// 头部
export const HeaderStyle = styled.header`
  position: fixed;
`;

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  padding: .5rem 1rem;
  align-items: center;
  background-color: ${props => props.theme.dark ? "#1D1F20": '#fff'};
  box-shadow: 0px 5px 40px 0px rgba(17, 58, 93, 0.1) !important;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

export const ALogo = styled.a`
  max-width: 200px;
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;

export const ImgLogo = styled.img`
  max-height: 50px;
  vertical-align: middle;
`;

export const DivCollapse = styled.div`
  flex-grow: 1;
  align-items: center;
  @media (min-width: 992px) {
    display: flex!important;
    flex-basis: auto;
  }
`;

// ul 菜单
export const UlMainMenu = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  max-height: 50px;
  vertical-align: middle;
  margin-right: auto!important;
  margin-left: 1.5rem!important;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;