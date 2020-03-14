import React from 'react';

import {
  DivPostHeader
} from './style';

function Post() {

  return (
    <div className="card">
      <div className="card-body">
        <DivPostHeader>
          <h1 className="h3 mb-3">电商混战618：数字狂欢背后，或现“水逆”隐忧</h1>
          <div className="meta">
            <div>
              <time>2020-03-14 15:04:47</time>
            </div>
          </div>
        </DivPostHeader>
      </div>
    </div>
  );
}

export default React.memo(Post);