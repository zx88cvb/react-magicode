import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import style,
{
  MainElement,
  PaperBase
} from '../../assets/style/global-style';

export const DivPaper = PaperBase;

export const DivBanner = styled.div`
  padding-top: 1rem;
  @media (min-width: 768px) {
    padding-top: 3rem;
  }
`;

export const Main = styled(MainElement)`
  padding-top: 1rem;
`;

// 类型List Div
export const DivListNav = styled.div`
  margin-bottom: .5rem;
  padding-bottom: .5rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 767.98px) {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  li {
    display: inline-block;
    flex-shrink: 0;
    :not(:first-child) {
      padding-left: .25rem;
    }

    .current {
      background-color: ${style['theme-color-primary']};
      border-color: ${style['theme-color-primary']};
      color: #fff;
    }
  }
`;

export const ButtonNav = styled(Button)`
  position: relative;
  font-size: .75rem;
  padding: .3125rem .75rem .25rem .75rem;

  color: ${style["font-color-light"]};

  :hover {
    color: ${style["font-color-light-hover"]};
  }
  
`;

export const DivLoad = styled.div`
  text-align: center;
  .dposts-ajax-load {
    cursor: pointer;

    width: 100%;

    color: #5e646d;
    border-color: #f2f2f5;
    background-color: #fff;

    border-radius: 2px;
    white-space: normal;
    padding: .375rem 1rem;

    font-size: 0.875rem;

    border: 1px solid transparent;

    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`;