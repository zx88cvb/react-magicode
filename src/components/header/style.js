import styled from 'styled-components';
import style,
{
  AElement
} from '../../assets/style/global-style';

// 头部
export const HeaderStyle = styled.header`
  /* position: fixed; */
`;

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  padding: .5rem 1rem;
  align-items: center;
  background-color: ${props => props.theme.dark ? "#1D1F20": '#fff'};
  

  &&& {
    box-shadow: 0px 5px 40px 0px rgba(17, 58, 93, 0.1);
  }

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
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

  @media (max-width: 992px) {
    padding-right: 0;
    padding-left: 0;
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

  @media (min-width: 992px){
    &[style] {
      -ms-flex-order: 1 !important;
      order: 1 !important;
    }
    &&& {
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @media (max-width: 767.98px) {
    margin: 0;
    text-align: center;
  }
`;

export const ImgLogo = styled.img.attrs(props => ({
  src: props.logo.src,
  alt: props.logo.alt
}))`
  max-height: 50px;
  vertical-align: middle;

  @media (max-width: 767.98px) {
    max-height: 35px;
  }
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

  &&& {
    margin-right: auto;
    margin-left: 1.5rem;
  }
  

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

// 右侧图标
export const UlItemOrder = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const LiMenuItem = styled.li`
  position: relative;
  margin: 0 .5rem 0 0;

  a {
    color: ${style["font-color-light"]};
  }
`;

export const LiItemNav = styled.li`
  :not(:first-child) {
    &&& {
      margin-left: .5rem;
    }
  }
  a {
    color: ${style["font-color-light"]};
  }
`;

export const AMenuItem = styled(AElement)`
  position: relative;
  display: block;
  font-size: .875rem;
  padding: .5rem;
`;

// 图标
export const AItemNav = styled(AElement)`
  text-align: center;
  width: 2.125rem;
  height: 2.125rem;
  position: relative;

  &&& {
    padding: 0;
    border-radius: 3px;
    white-space: normal;
    font-size: .875rem;
  }

  svg {
    :hover {
      color: ${style["font-color-light-hover"]};
    }
  }
`;

export const ButtonNavBar = styled.button`
  padding: .25rem .75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: .25rem;
`;