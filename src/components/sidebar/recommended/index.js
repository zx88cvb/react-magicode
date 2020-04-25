import React from 'react';
import {
  DivCard,
  DivCardHeader,
  DivRecommendedListItem,
  DivRecommendedMedia,
  ARecommendedMedia,
  SpanRecommendedOverlay,
  DivRecommendedListContent,
  DivRecommendedListBody,
  DivRecommendedListFooter
} from './style';

function SidebarRecommend(props) {
  const { commentNews } = props;

  const articleCommentList = (list) => {
    return (
      list.map(item => (
        <div className="py-2" key={item.id}>
          <DivRecommendedListItem>
            <DivRecommendedMedia>
              <ARecommendedMedia image={React.$imgPath(item.thumbnail)}>
                <SpanRecommendedOverlay />
              </ARecommendedMedia>
            </DivRecommendedMedia>
            <DivRecommendedListContent>
              <DivRecommendedListBody>
                <a href="#">{item.title}</a>
              </DivRecommendedListBody>
              <DivRecommendedListFooter>
                <div className="text-muted">
                  <time>{item.postTime}</time>
                </div>
              </DivRecommendedListFooter>
            </DivRecommendedListContent>
          </DivRecommendedListItem>
        </div>
      ))
    );
  }

  return(
    <DivCard>
      <DivCardHeader>
        文章聚合
        {/* <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-line"></use>
        </svg> */}
      </DivCardHeader>
      <div className="card-body">
        <div className="my-n2">
          {
            articleCommentList(commentNews)
          }
        </div>
      </div>
    </DivCard>
  );
}

export default React.memo(SidebarRecommend);