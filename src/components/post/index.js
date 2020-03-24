import React from 'react';

import {
  DivPostHeader,
  ATag,
  DivPostContent,
  DivFooter
} from './style';

function Post() {

  return (
    <div className="card">
      <div className="card-body">
        <DivPostHeader>
          <div>
            <ATag to="/">
              <span className="badge-primary">#标签#</span>
            </ATag>
            <ATag to="/">
              <span className="badge-primary">#标签#</span>
            </ATag>
          </div>
          <h1 className="h3 mb-3">电商混战618：数字狂欢背后，或现“水逆”隐忧</h1>
          <div className="meta">
            <div>
              <time>2020-03-14 15:04:47</time>
            </div>
            <div className="ml-auto">
              <span className="mx-1">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-eye-o"></use>
                </svg>
                <small>1024</small>
              </span>
              <span className="mx-1">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-chat-round"></use>
                </svg>
                <small>12</small>
              </span>
              <span className="mx-1">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-yidiandiantubiao09"></use>
                </svg>
                <small>12</small>
              </span>
            </div>
          </div>
          <div className="border-theme bg-primary"></div>
        </DivPostHeader>

        {/* 文章内容 */}
        <DivPostContent>
          <div className="nc-light-gallery">
          <p>编者按：本文来自微信公众号“iFeng科技”（ID：ifeng_tech），作者 孙洪，编辑 于浩。36氪经授权转载。</p>
          <p>数字狂欢背后，电商行业或已陷入集体焦虑。</p>
          </div>
        </DivPostContent>
      </div>
      <DivFooter className="card-footer">
        <div className="post-share-section py-2">
          <span className="mr">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-like"></use>
            </svg>
            <small>12</small>
          </span>
        </div>
      </DivFooter>
    </div>
  );
}

export default React.memo(Post);