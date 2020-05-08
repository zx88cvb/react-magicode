import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SidebarRandom from './random';
import SidebarRecommended from './recommended';
import SidebarTag from './tag';
import {
  DivSidebar
} from './style';

function Sidebar(props) {

  const { 
    randNews,
    commentNews,
    tagList
  } = props;

  return (
    <DivSidebar>
      <SidebarRandom randNews={randNews} />
      <SidebarRecommended commentNews={commentNews} />
      <SidebarTag tagList={tagList} />
    </DivSidebar>
  );
}

const mapState = (state) => ({
  randNews: state.home.sidebar.randNews,
  commentNews: state.home.sidebar.commentNews,
  tagList: state.home.sidebar.tagList
});

export default connect(mapState, null)(React.memo(Sidebar));
