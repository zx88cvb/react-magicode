import styled from 'styled-components';
import style,
{
  AElement,
  DivMedia,
  PaperBase,
  SpanOverlay,
  DivCard,
  DivCardHeader,
  DivCardBody
} from 'assets/style/global-style';
// material-ui
export const DivPaper = styled(PaperBase)`
  padding-right: 0;
  padding-left: 0;
`;

// 随机文章
export const DivRecommend = DivCard;

export const DivRecommendedHeader = DivCardHeader;
export const DivRecommendedBody = DivCardBody;