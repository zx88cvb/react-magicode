import React from 'react';

import {
  DivTitle
} from './style';

import Respond from './respond/index'

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
          <Respond></Respond>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Comment);