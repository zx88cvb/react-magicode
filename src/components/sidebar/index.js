import React from 'react';

import SidebarRandom from './random';
import SidebarRecommended from './recommended';
import SidebarTag from './tag';
import {
  DivSidebar
} from './style';

function Sidebar(props) {
  return (
    <DivSidebar>
      <SidebarRandom/>
      <SidebarRecommended/>
      <SidebarTag />
    </DivSidebar>
  );
}

export default React.memo(Sidebar);
