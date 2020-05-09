import styled from 'styled-components';
import style from 'assets/style/global-style';

export const SpanArrow = styled.span`
  display: block;

  position: fixed;
  bottom: 40px;
  right: 46px;
  z-index: 99999;

  cursor: pointer;

  text-align: center;
  width: 2.125rem;
  height: 2.125rem;
  padding: 0 !important;
  font-size: 1.125rem;

  border-radius: 2px;
  white-space: normal;

  background-color: ${style["theme-color-primary"]};;
  border-color: ${style["theme-color-primary"]};;

  svg {
    color: #fff;
  }
`;