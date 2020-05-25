import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import SidebarRandom from './random';
import SidebarRecommended from './recommended';
import SidebarTag from './tag';
import {
  DivSidebar
} from './style';

function Sidebar() {

  // useSelector 代替 mapState
  const randNews = useSelector(state => state.home.sidebar.randNews, shallowEqual);
  const commentNews = useSelector(state => state.home.sidebar.commentNews, shallowEqual);
  const tagList = useSelector(state => state.home.sidebar.tagList, shallowEqual);

  return (
    <DivSidebar>
      <SidebarRandom randNews={randNews} />
      <SidebarRecommended commentNews={commentNews} />
      <SidebarTag tagList={tagList} />
    </DivSidebar>
  );
}

export default React.memo(Sidebar);
