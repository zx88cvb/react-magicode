import styled from 'styled-components';
import style,
{
  AElement,
  DivMedia,
  PaperBase,
  SpanOverlay,
  DivCard,
  DivCardHeader,
  DivCardBody,
  DivMyN2,
  DivPy2,
  DivListItem,
  MediaContent
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

export const DivRecommendedMyN2 = DivMyN2;

export const DivRecommendedPy2 = DivPy2;

export const DivRecommendedListItem = styled(DivListItem)`
  border-radius: 3px;
  overflow: hidden;
  color: #fff;
`;

export const DivRecommendedMedia = styled(DivMedia)`
  padding-top: 50%;
  border-radius: 3px;

  ::after {
    content: '';
    display: block;
  }
`;

export const ARecommendedMedia = styled(MediaContent)`
  background-image: url(https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2019/06/2019072007293673.jpg);
`;