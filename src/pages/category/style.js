import styled from 'styled-components';
import { Link } from 'react-router-dom';
import style,
{
  MainElement,
  PaperBase
} from '../../assets/style/global-style';

export const DivPaper = PaperBase;

export const Main = styled(MainElement)`
  @media (min-width: 768px) {
    padding-top: 3rem;
  }
`;

export const DivBreadcrumbs = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  color: #9ca0ad;
  margin-bottom: .5rem;

  span {
    font-size: .75rem;
  }

  .sep {
    margin: 0 .65rem;
  }
`;

export const AHome = styled(Link)`
  text-decoration: none;
  color: ${style['theme-color-dark']};
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