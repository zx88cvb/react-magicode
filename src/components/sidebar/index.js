import React from 'react';

import SidebarRandom from './random';
import SidebarRecommended from './recommended';
import {
  DivSidebar
} from './style';

function Sidebar(props) {
  return (
    <DivSidebar>
      <SidebarRandom/>
      <SidebarRecommended/>
    </DivSidebar>
  );
}

export default React.memo(Sidebar);
