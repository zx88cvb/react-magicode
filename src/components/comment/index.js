import React, 
{ 
  useState,
  useMemo,
  useCallback 
} from 'react';

import {
  DivTitle,
  UlCommentList
} from './style';

import Respond from './respond/index'
import TreeItem from './treeitem'

function Comment(props) {
  const {
    comments
  } = props;

  // 分页 当前页
  const [replayKey, setReplayKey] = useState(0);


  // 是否显示回复
  const replay = (id) => {
    return replayKey === id ? (<Respond />): null;
  };

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

  // 点击回复
  const handleReplayClick = (id) => {
    setReplayKey(id);
  };


  // 遍历留言list
  const commentList = (list) => {
    return(
      list.map(item => (
        <UlCommentList key={item.id}>
          <li className="comment parent">
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
                  <p>{item.content}</p>
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
        </UlCommentList>
      ))
    );
  }

  return (
    <div className="comments">
      <DivTitle>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-chat"></use>
        </svg>
        <span className="c-title">评论</span>
        <small>({comments.total})</small>
      </DivTitle>
      <div className="card">
        <div className="card-body">
        <Respond />
          {
            commentList(comments.records)
          }
        </div>
      </div>
    </div>
  );
}

export default React.memo(Comment);