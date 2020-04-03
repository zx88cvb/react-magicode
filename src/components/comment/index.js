import React from 'react';

import {
  DivTitle,
  UlCommentList,
  UlChildren
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
          <UlCommentList>
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
                      admin
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>我是一条留言</p>
                  </div>

                  <div className="comment-footer flex-fill">
                    <div>
                      <time>2020-03-26 14:19:36</time>
                    </div>
                    <div className="flex-fill"></div>
                    <span className="comment-reply-link">
                      回复
                    </span>
                  </div>
                </div>
              </article>
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
                          admin
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>我是一条留言</p>
                      </div>

                      <div className="comment-footer flex-fill">
                        <div>
                          <time>2020-03-26 14:19:36</time>
                        </div>
                        <div className="flex-fill"></div>
                        <span className="comment-reply-link">
                          回复
                        </span>
                      </div>
                    </div>
                  </article>
                  <Respond></Respond>
                </li>
              </UlChildren>
            </li>
          </UlCommentList>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Comment);