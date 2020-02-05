import React from 'react';
import {
  DivRecommend,
  DivRecommendedHeader,
  DivRecommendedBody
} from './style';

function SidebarRecommend(props) {
  return(
    <DivRecommend>
      <DivRecommendedHeader>
        文章聚合
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-line"></use>
        </svg>
      </DivRecommendedHeader>
      <DivRecommendedBody></DivRecommendedBody>
    </DivRecommend>
  );
}

export default React.memo(SidebarRecommend);