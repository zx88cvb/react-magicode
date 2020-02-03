import styled from 'styled-components';
import style,
{
  AElement,
  DivMedia,
  PaperBase,
  SpanOverlay
} from 'assets/style/global-style';
// material-ui
export const DivPaper = styled(PaperBase)`
  padding-right: 0;
  padding-left: 0;
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

export const DivMediaCard = styled(DivMedia)`
  border-radius: 3px;

  ::after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const AMediaContent = styled(AElement)`
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
  background-image: url(https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2019/06/2019062004540484.jpg);
`;

export const SpanCardOverlay = SpanOverlay;

export const DivMediaOverlay = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  padding: 1.5rem;
  color: #fff;
`;

export const DivMediaFlex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    display: block;
    line-height: 1;
    font-size: 3.5rem;
    font-weight: 300;
    color: #fff;
  }

  time {
    display: block;
    font-size: 0.75rem;
  }
`;

export const DivListContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(6, 6, 8, 0), rgba(6, 6, 8, 0.7));
`;

export const DivListBody = styled.div`
  flex: 1 1 auto;
`;

export const AListTitle = styled(AElement)`
  overflow: hidden;
  display: -webkit-box;
  line-height: 1.42;
  color: inherit;
  font-size: 1.08rem;
  background-color: transparent;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const DivListFooter = styled.div`
  margin-top: 1rem;
`;

export const DivFooterFlex = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
`;

export const SpanFooterBadge = styled.span`
  display: inline-block;
  padding: .25em .3em;
  border-radius: 2px;
  font-size: 75%;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  color: #fff;
  background-color: ${style["theme-color-primary"]};
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export const ButtonRefresh = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;

  svg {
    font-size: 1.125rem;
  }
`;


// ----------------分割线----------------------