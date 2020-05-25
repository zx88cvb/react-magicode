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
  const { total } = props;

  return (
    <DivListCover>
      <DivItem>
        <DivCoverMedia>
          <DivCoverContent as="div" image={React.$imgPath('default-cover.jpg')}>
            <div className="overlay"></div>
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
                <span className="text-xs">{total} 篇文章</span>
              </div>
            </DivAlientItem>
            <DivBoder>
              <div className="text-sm h-2x">精彩即可开启</div>
              <div className="border-theme bg-primary"></div>
            </DivBoder>
          </DivListBody>
        </DivListContent>
      </DivItem>
    </DivListCover>
  );
}

export default React.memo(Summary);