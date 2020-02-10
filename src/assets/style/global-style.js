import styled, { createGlobalStyle } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const BaseStyle = {
  "theme-color": "#fdfbfb",
  "theme-color-dark": "#222831",
  "theme-color-primary": "#448EF6",
  "theme-color-primary-dark": "#007bff",
  "theme-color-shadow": "rgba(212, 68, 57, .5)",
  "font-color-light": "#222831",
  "font-color-light-hover": "#007bff",
  "font-color-light-shadow": "rgba(241, 241, 241, 0.6)",//略淡
  "font-color-desc": "#393e46",
  "font-color-desc-dark": "#B1B1C1", //略淡
  "font-size-ss": "10px",
  "font-size-s": "12px",
  "font-size-m": "14px",
  "font-size-l": "16px",
  "font-size-ll": "18px",
  "border-color": "#e4e4e4",
  "border-color-v2": "rgba(228, 228, 228, 0.1)",
  "background-color": "#f2f3f4",
  "background-color-shadow": "rgba(0, 0, 0, 0.3)",
  "highlight-background-color": "#fff",
};

export default BaseStyle;

export const CommonStyle = createGlobalStyle`
  body, input, button, select, optgroup, option, textarea, blockquote, dd, dl, figure, form, pre, .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }

  body {
    background-color: #fdfbfb;
  }
  
  /* iconfont */
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding-right: 0.625rem;
      padding-left: 0.625rem;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* margin-right: -15px;
    margin-left: -15px; */
  }

  @media (max-width: 767.98px) {
    .row {
      margin-right: -0.625rem;
      margin-left: -0.625rem;
    }
  }
  

  .order-1 {
    -ms-flex-order: 1;
    order: 1;
  }

  .order-2 {
    -ms-flex-order: 2;
    order: 2;
  }

  .order-3 {
    -ms-flex-order: 3;
    order: 3;
  }

  .p-3 {
    padding: 1rem;
  }

  .p-4 {
    padding: 1.5rem;
  }
  @media (min-width: 992px) {
    .p-lg-5 {
      padding: 3rem;
    }
  }

  .flex-fill {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

`

export const MainElement = styled.main`
  padding-bottom: 1rem;
  padding-top: 1rem;
  @media (min-width: 768px) {
    padding-bottom: 3rem;
    padding-top: 1.5rem;
  }
`;

export const AElement = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const DivMedia = styled.div`
  position: relative;
  display: block;
  align-items: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  padding: 0;
`;

export const MediaContent = styled(AElement)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0;
  border-radius: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: rgba(120, 120, 120, 0.1);
`;

export const SpanOverlay = styled.span`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.66);
  position: absolute;
  opacity: .22;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease-in-out;
`

// 右侧Card头部
export const DivCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-width: 0;
  border-radius: 3px;
  margin-bottom: 1rem;
  min-width: 0;
  word-wrap: break-word;
  /* border: 1px solid rgba(0,0,0,.125); */
  box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.2);
  background: #fff;
`;


export const DivCardHeader = styled.div`
  margin-bottom: 0;
  padding: 1.25rem 1.125rem 0;
  border: 0;
  background-color: transparent;
  background-clip: padding-box;
  line-height: 1;
  :first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-left: 16px;
    top: 0;
    color: ${BaseStyle["theme-color-primary"]};
    transform: translate(0%, -50%);
  }
`;

export const DivCardBody = styled.div`
  padding: 1.125rem 1.125rem;
  flex: 1 1 auto;
`;

export const DivMyN2 = styled.div`
  margin: -.5rem 0;
`;

export const DivPy2 = styled.div`
  padding: .5rem 0; 
`;

export const DivListContent = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
`;

export const DivListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
`;

// ------------------------------------------------

// material-ui
export const PaperBase = styled(Paper)`
  &&& {
    background-color: transparent;
  }
`;