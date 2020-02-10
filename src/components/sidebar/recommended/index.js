import React from 'react';
import {
  DivRecommend,
  DivRecommendedHeader,
  DivRecommendedBody,
  DivRecommendedMyN2,
  DivRecommendedPy2,
  DivRecommendedListItem,
  DivRecommendedMedia,
  ARecommendedMedia
} from './style';

function SidebarRecommend(props) {
  return(
    <DivRecommend>
      <DivRecommendedHeader>
        文章聚合
        {/* <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-line"></use>
        </svg> */}
      </DivRecommendedHeader>
      <DivRecommendedBody>
        <DivRecommendedMyN2>
          <DivRecommendedPy2>
            <DivRecommendedListItem>
              <DivRecommendedMedia>
                <ARecommendedMedia></ARecommendedMedia>
              </DivRecommendedMedia>
            </DivRecommendedListItem>
          </DivRecommendedPy2>
        </DivRecommendedMyN2>
      </DivRecommendedBody>
    </DivRecommend>
  );
}

export default React.memo(SidebarRecommend);