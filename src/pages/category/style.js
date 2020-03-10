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