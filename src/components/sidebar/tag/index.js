import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link key={item.id}
              to={`/tag/${item.id}`}>
              {item.tagName}
            </Link>
          ))
        }
      </DivTagCloud>
    </DivCard>
  );
}

export default React.memo(SidebarTag);