import styled, { createGlobalStyle } from 'styled-components';

export default {
  "theme-color": "#fdfbfb",
  "theme-color-shadow": "rgba(212, 68, 57, .5)",
  "font-color-light": "#222831",
  "font-color-light-hover": "#007bff",
  "font-color-light-shadow": "rgba(241, 241, 241, 0.6)",//略淡
  "font-color-desc": "#2E3030",
  "font-color-desc-v2": "#bba8a8", //略淡
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
  "official-red": "#E82001"
};

export const CommonStyle = createGlobalStyle`
  body, input, button, select, optgroup, option, textarea, blockquote, dd, dl, figure, form, pre, .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
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
`

export const AElement = styled.a`
  text-decoration: none;
  cursor: pointer;
`;