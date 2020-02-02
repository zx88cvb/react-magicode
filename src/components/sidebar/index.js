import React from 'react';
import {
  DivSidebar,
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
  AListTitle
} from './style';

function Sidebar(props) {
  return (
    <DivSidebar>
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
              <DivListFooter></DivListFooter>
            </DivListContent>
          </DivCardItem>
        </div>
      </DivSingleCard>
    </DivSidebar>
  );
}

export default React.memo(Sidebar);
