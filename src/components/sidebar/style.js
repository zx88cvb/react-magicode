import styled from 'styled-components';
import style,
{
  AElement,
  DivMedia,
  PaperBase
} from '../../assets/style/global-style';
// material-ui
export const DivPaper = styled(PaperBase)`
  padding-right: 0;
  padding-left: 0;
`;

export const DivSidebar = styled.div`
  padding-top: 0px;
  padding-bottom: 1px;
  position: static;
  transform: none;
`;

// 随机文章
export const DivSingleCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0);
  background: #fff;
  border: 1px solid rgba(0,0,0,.125);
  border-width: 0;
  border-radius: 3px;
  margin-bottom: 1rem;
`;

export const DivCardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
  min-width: 0;
  word-wrap: break-word;
  color: #fff;
`;

export const DivMediaCard = styled.DivMedia`
  border-radius: 3px;
`;