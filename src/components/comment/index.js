import React from 'react';

import {
  DivTitle,
  DivRespond
} from './style';

function Comment() {
  return (
    <div className="comments">
      <DivTitle>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-chat"></use>
        </svg>
        <span className="c-title">评论</span>
        <small>(13)</small>
      </DivTitle>
      <div className="card">
        <div className="card-body">
          <DivRespond>
            <form>
              <div className="comment-from-author">

              </div>
            </form>
          </DivRespond>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Comment);