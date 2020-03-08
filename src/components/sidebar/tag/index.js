import React from 'react';

import {
  DivTagCloud
} from './style';
import {
  DivCard,
  DivCardHeader
}
from 'assets/style/global-style';

function SidebarTag(props) {
  return (
    <DivCard>
      <DivCardHeader>
        标签
      </DivCardHeader>
      <DivTagCloud>
        <a href="#">Apple</a>
      </DivTagCloud>
    </DivCard>
  );
}

export default React.memo(SidebarTag);