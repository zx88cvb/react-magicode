import styled from 'styled-components';
import style, {
  DivListItem,
  DivMedia,
  MediaContent
} from '../../assets/style/global-style';

export {
  DivListContent,
  DivListBody
} from 'assets/style/global-style' ;

export const DivListCover = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const DivItem = styled(DivListItem)`
  border-radius: 3px;
  overflow: hidden;
  color: #fff;
  background-color: ${style['222831']};

  .list-content {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(6, 6, 8, 0), rgba(6, 6, 8, 0.7));
  }
`;

export const DivCoverMedia = styled(DivMedia)`
  border-radius: 3px;
  ::after {
    content: '';
    display: block;
    padding-top: 42.85%;
  }
`;

export const DivCoverContent = styled(MediaContent)`
  cursor: auto;
  background-image: url(${props => props.image});
`;

export const DivAlientItem = styled.div`
  display: flex;
  align-items: center;

  .text-xl {
    font-size: 1.375rem;
  }

  .text-light {
    color: #f2f2f5;

    .icon {
      font-size: 1.375rem;
      margin-right: .25rem;
      color: #f2f2f5;
    }
    .text-xs {
      font-size: 0.75rem;
    }
  }
`;

export const DivBoder = styled.div`
  position: relative;
  border-top: 1px solid #dee2e6;
  border-color: rgba(255, 255, 255, 0.3);

  margin-top: .5rem;
  padding-top: .5rem;
  @media (min-width: 768px) {
    margin-top: 1rem;
    padding-top: 1rem;
  }

  .h-2x {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 0.875rem;
  }

  .border-theme {
    bottom: auto;
    top: 0;
    margin-top: -1px;
    width: 6.3%;

    position: absolute;
    display: inline-block;
    left: 0;
    height: 2px;
    z-index: 2;

    background-color: #448EF6;
  }
`;