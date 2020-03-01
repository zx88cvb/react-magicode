import React from 'react';
import {
  DivRecommend,
  DivRecommendedHeader,
  DivRecommendedBody,
  DivRecommendedMyN2,
  DivRecommendedPy2,
  DivRecommendedListItem,
  DivRecommendedMedia,
  ARecommendedMedia,
  SpanRecommendedOverlay,
  DivRecommendedListContent,
  DivRecommendedListBody,
  DivRecommendedListFooter
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
          </DivRecommendedPy2>
          
        </DivRecommendedMyN2>
      </DivRecommendedBody>
    </DivRecommend>
  );
}

export default React.memo(SidebarRecommend);