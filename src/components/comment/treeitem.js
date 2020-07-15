import React from 'react';

import {
  UlChildren
} from './style';

function TreeItem(props) {
  const {
    parent,
    item,
    replay,
    handleReplayClick
  } = props;

  // 留言子组件
  const childTree = (list, parent) => {
    return (
      list.map(item => (
        <TreeItem
          key={item.id} 
          item={item}
          parent={parent}
          replay={replay}
          handleReplayClick={handleReplayClick} />
      ))
    );
  }


  return (
    <UlChildren>
      <li className="comment">
        <article className="comment-body flex-fill">
          <div className="comment-avatar-author">
            <div className="flex-avatar">
              <img src="https://gravatar.loli.net/avatar/6db29ae2881a37831a16ff86fbf83f6d%3Fs=48&d=https%253A%252F%252Fpandapro.demo.nicetheme.xyz%252Fwp-content%252Fuploads%252F2019%252F07%252F1563805893.png&r=g" alt="img" width="48" height="48" />
            </div>
          </div>

          <div className="comment-text flex-fill">
            <div className="comment-info">
              <div className="comment-author">
              {item.nickname}
              </div>
          </div>
        <div className="comment-content">
          <p><span>@{parent.nickname} </span>{item.content}</p>
        </div>
          <div className="comment-footer flex-fill">
            <div>
              <time>{item.createTime}</time>
            </div>
            <div className="flex-fill"></div>
            <span className="comment-reply-link" onClick={() => handleReplayClick(item.id)}>
              回复
            </span>
          </div>
        </div>
       </article>
      {
        replay(item.id)
      }
      {
        childTree(item.blogCommentList, item)
      }
      </li>
    </UlChildren>
  );
}

export default React.memo(TreeItem);