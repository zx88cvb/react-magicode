import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import SidebarRandom from './random';
import SidebarRecommended from './recommended';
import SidebarTag from './tag';
import {
  DivSidebar
} from './style';

import {
  getArticleRandCommentAction
} from './store/actionCreators';

function Sidebar(props) {
  const {
    tagList,
    randNews,
    commentNews
  } = props;

  const {
    getArticleRandCommentDispatch
  } = props;

  useEffect(() => {
    getArticleRandCommentDispatch();
  }, [getArticleRandCommentDispatch]);

  return (
    <DivSidebar>
      <SidebarRandom randNews={randNews} />
      <SidebarRecommended commentNews={commentNews} />
      <SidebarTag tagList={tagList} />
    </DivSidebar>
  );
}

const mapState = (state) => ({
  tagList: state.sidebar.tagList,
  randNews: state.sidebar.randNews,
  commentNews: state.sidebar.commentNews
});

const mapDispatch = dispatch => {
  return {
    getArticleRandCommentDispatch() {
      dispatch(getArticleRandCommentAction());
    }
  }
};

export default connect(mapState, mapDispatch)(React.memo(Sidebar));
