import React from 'react';

import {
  DivCard,
  DivCardHeader,
  DivTagCloud
} from './style';

function SidebarTag(props) {
  const { tagList } = props;

  return (
    <DivCard>
      <DivCardHeader>
        标签
      </DivCardHeader>
      <DivTagCloud>
        {
          tagList.map(item => (
            <a href="#" key={item.id}>
              {item.tagName}
            </a>
          ))
        }
      </DivTagCloud>
    </DivCard>
  );
}

export default React.memo(SidebarTag);