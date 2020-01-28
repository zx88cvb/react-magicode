import styled from 'styled-components';
import style,
{
  AElement,
  MainElement
} from '../../assets/style/global-style';

export const DivBanner = styled.div`
  padding-top: 1rem;
  @media (min-width: 768px) {
    padding-top: 3rem;
  }
`;

export const Main = styled(MainElement)`
  padding-top: 1rem;
`;