import React from 'react';
import {
  DivSingleCard,
  DivCardItem,
  DivMediaCard,
  AMediaContent,
  SpanCardOverlay,
  DivMediaOverlay,
  DivMediaFlex,
  DivListContent,
  DivListBody,
  DivListFooter,
  AListTitle,
  DivFooterFlex,
  SpanFooterBadge,
  ButtonRefresh
} from './style';

function SidebarRandom(props) {
  return (
    <DivSingleCard>
      <div>
        <DivCardItem>
          <DivMediaCard>
            <AMediaContent>
              <SpanCardOverlay />
            </AMediaContent>
            <DivMediaOverlay>
              <DivMediaFlex>
                <span>02</span>
                <time>2月,2020</time>
              </DivMediaFlex>
            </DivMediaOverlay>
          </DivMediaCard>
          <DivListContent className="p-4">
            <DivListBody>
              <AListTitle>5 年估值 80 亿美金，寻找中国版 Peloton | 36氪新风向</AListTitle>
            </DivListBody>
            <DivListFooter>
              <DivFooterFlex>
                <div>
                  <SpanFooterBadge>随机一文</SpanFooterBadge>
                </div>
                <div className="flex-fill"></div>
                <div>
                  <ButtonRefresh>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-refresh"></use>
                    </svg>
                  </ButtonRefresh>
                </div>
              </DivFooterFlex>
            </DivListFooter>
          </DivListContent>
        </DivCardItem>
      </div>
    </DivSingleCard>
  );
}

export default React.memo(SidebarRandom);
