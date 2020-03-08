import React from 'react';
import {
  DivRecommendedHeader,
  DivRecommendedListItem,
  DivRecommendedMedia,
  ARecommendedMedia,
  SpanRecommendedOverlay,
  DivRecommendedListContent,
  DivRecommendedListBody,
  DivRecommendedListFooter
} from './style';

import {
  DivCard,
  DivCardHeader
}
from 'assets/style/global-style';

function SidebarRecommend(props) {
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
          <div className="py-2">
            <DivRecommendedListItem>
              <DivRecommendedMedia>
                <ARecommendedMedia>
                  <SpanRecommendedOverlay />
                </ARecommendedMedia>
              </DivRecommendedMedia>
              <DivRecommendedListContent>
                <DivRecommendedListBody>
                  <a href="#">在给《复联4》贡献完票房和泪水后，你终于可以去玩一玩迪士尼漫威园区了</a>
                </DivRecommendedListBody>
                <DivRecommendedListFooter>
                  <div className="text-muted">
                    <time>2020-03-01</time>
                  </div>
                </DivRecommendedListFooter>
              </DivRecommendedListContent>
            </DivRecommendedListItem>
          </div>
        </div>
      </div>
    </DivCard>
  );
}

export default React.memo(SidebarRecommend);