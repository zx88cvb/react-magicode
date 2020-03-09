import React from 'react';

import {
  DivCard,
  DivCardHeader,
  DivTagCloud
} from './style';

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