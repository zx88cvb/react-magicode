import React from 'react';

import {
  DivPostHeader,
  ATag,
  DivPostContent,
  DivFooter
} from './style';

function Post(props) {

  const {
    article
  } = props;

  const tagList = (list) => {
    return list? (
      list.map(item => (
        <ATag key={item.id} to={`/tag/${item.id}`}>
          <span className="badge-primary">#{item.tagName}#</span>
        </ATag>
      ))
    ): null;
  };

  return (
    <div className="card">
      <div className="card-body">
        <DivPostHeader>
          <div>
            {tagList(article.tagList)}
          </div>
          <h1 className="h3 mb-3">{article.title}</h1>
          <div className="meta">
            <div>
              <time>{article.createTime}</time>
            </div>
            <div className="ml-auto">
              <span className="mx-1">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-eye-o"></use>
                </svg>
                <small>{article.browseCount}</small>
              </span>
              <span className="mx-1">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-chat-round"></use>
                </svg>
                <small>{article.commentCount}</small>
              </span>
              <span className="mx-1">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-yidiandiantubiao09"></use>
                </svg>
                <small>{article.pollCount}</small>
              </span>
            </div>
          </div>
          <div className="border-theme bg-primary"></div>
        </DivPostHeader>

        {/* 文章内容 */}
        <DivPostContent>
          <div className="nc-light-gallery" dangerouslySetInnerHTML={{__html: article.content}}>
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