import React from 'react';

import SidebarRandom from './random'
import {
  DivSidebar
} from './style';

function Sidebar(props) {
  return (
    <DivSidebar>
      <SidebarRandom/>
    </DivSidebar>
  );
}

export default React.memo(Sidebar);
