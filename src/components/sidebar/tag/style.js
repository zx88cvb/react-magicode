import styled from 'styled-components';
import style from 'assets/style/global-style';

// material-ui
export const DivTagCloud = styled.div`
  padding: 1.375rem 1.5rem 1.5rem;
  a {
    position: relative;
    font-size: .875rem !important;
    line-height: 1;
    text-transform: uppercase;
    display: inline-block;
    margin: 0 .75rem 0.5rem 0;

    color: ${style['theme-color-dark']};
    transition: all .3s ease;
    cursor: pointer;
    text-decoration: none;

    :hover {
      color: ${style["font-color-light-hover"]};
    }
  }
`;