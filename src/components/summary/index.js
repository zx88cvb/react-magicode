import React from 'react';
import {
  DivListCover,
  DivItem,
  DivCoverMedia,
  DivCoverContent,
  DivListContent,
  DivListBody,
  DivAlientItem,
  DivBoder
} from './style';

function Summary(props) {
  return (
    <DivListCover>
      <DivItem>
        <DivCoverMedia>
          <DivCoverContent as="div">
            <div class="overlay"></div>
          </DivCoverContent>
        </DivCoverMedia>
        <DivListContent className="list-content p-3 p-md-4">
          <DivListBody>
            <DivAlientItem>
              <div className="text-xl">科技</div>
              <div className="flex-fill"></div>
              <div className="text-light">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-file"></use>
                </svg>
                <span className="text-xs">8 篇文章</span>
              </div>
            </DivAlientItem>
            <DivBoder>
              <div class="text-sm h-2x">随着技术的发展，在欣赏或参与竞技体育项目的时候。</div>
              <div class="border-theme bg-primary"></div>
            </DivBoder>
          </DivListBody>
        </DivListContent>
      </DivItem>
    </DivListCover>
  );
}

export default React.memo(Summary);