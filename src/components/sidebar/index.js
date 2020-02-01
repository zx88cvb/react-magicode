import React from 'react';
import {
  DivSidebar,
  DivSingleCard,
  DivCardItem,
  DivMediaCard
} from './style';

function Sidebar(props) {
  return (
    <DivSidebar>
      <DivSingleCard>
        <div>
          <DivCardItem>
            <DivMediaCard></DivMediaCard>
          </DivCardItem>
        </div>
      </DivSingleCard>
    </DivSidebar>
  );
}

export default React.memo(Sidebar);
