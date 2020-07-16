import styled from 'styled-components';
import
{
  DivMedia,
  PaperBase,
  SpanOverlay,
  DivListItem,
  MediaContent,
  DivListContent,
  DivListBody,
  DivListFooter
} from 'assets/style/global-style';

export {
  DivCard,
  DivCardHeader
}
from 'assets/style/global-style';
// material-ui
export const DivPaper = styled(PaperBase)`
  padding-right: 0;
  padding-left: 0;
`;

// 随机文章
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
  background-image: url(${props => props.image});
`;

export const SpanRecommendedOverlay = SpanOverlay;

export const DivRecommendedListContent = styled(DivListContent)`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  padding: .75rem;
  background: linear-gradient(to bottom, rgba(6, 6, 8, 0), rgba(6, 6, 8, 0.7));
`;

export const DivRecommendedListBody = styled(DivListBody)`
  a {
    text-decoration: none;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 0.875rem;
    line-height: 1.42;
    display: block;
    color: inherit;
  }
`;

export const DivRecommendedListFooter = styled(DivListFooter)`
  .text-muted {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    time {
      display: inline-block;
    }
  }
`;