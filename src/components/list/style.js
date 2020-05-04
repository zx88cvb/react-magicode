import styled from 'styled-components';
import { Link } from 'react-router-dom';

import style,
{
  AElement,
  PaperBase
} from '../../assets/style/global-style';

export const DivPaper = styled(PaperBase)`
  padding: 0 0 0 1rem;
`;

export const DivListItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  padding: 1rem;
  min-width: 0;
  word-wrap: break-word;

  background: #fff;
  border-width: 0;
  border-radius: 3px;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.2);
`;

export const DivMedia = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0;
  flex-shrink: 0;
  align-items: flex-start;
  
  ::after {
    content: '';
    display: block;
    padding-top: 66.66666%;
  }
  :first-child {
    border-radius: inherit;
  }
`;

export const AMediaConent = styled(Link)`
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
  background-image: url(${props => props.image});
`;

export const DivListContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  padding: 0 0 0 1rem;
`;

export const DivListBody = styled.div`
  flex: 1 1 auto;
`;

export const DivListFooter = styled.div`
  margin-top: 0.5rem;
`;

export const AListBody = styled(Link)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  line-height: 1.4285714286;
  font-size: 1.125rem;
  color: inherit;

  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${style["font-color-light-hover"]};
  }
`;

export const DivListDesc = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;

  p {
    color: ${style["font-color-desc"]};
    font-size: 0.875rem;
  }
  
`;

export const DivItemCenter = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  font-size: 0.75rem;
  color: #9ca0ad;
`;

export const DivInlineBlock = styled.div`
  display: inline-block;
  /* @media (min-width: 768px) {
    margin-left: .5rem;
  } */
`;

export const DivIB2 = styled(DivInlineBlock)`
  margin: 0 .25rem;
  @media (min-width: 768px) {
    margin: 0 .5rem
  }

  svg {
    color: ${style["theme-color-primary"]};
  }
`;

export const AUserName = styled(AElement)`
  color: ${style["font-color-light"]};

  :hover {
    color: ${style["font-color-light-hover"]};
  }
`;

export const DivTime = styled.div`
  time {
    margin: 0 .25rem;
  }
`;