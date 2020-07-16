import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setPageTitle
} from 'pages/category/store/actionCreators';

import {
  DivCard,
  DivCardHeader,
  DivTagCloud
} from './style';

function SidebarTag(props) {
  const { tagList } = props;

  // useDispatch 代替 mapDispatch
  const dispatch = useDispatch();

  // 菜单点击事件
  const menuHandleClick = (title) => {
    dispatch(setPageTitle(title));
  }

  return (
    <DivCard>
      <DivCardHeader>
        标签
      </DivCardHeader>
      <DivTagCloud>
        {
          tagList.map(item => (
            <Link key={item.id}
              to={`/tag/${item.id}`}
              onClick={() => menuHandleClick(item.tagName)}>
              {item.tagName}
            </Link>
          ))
        }
      </DivTagCloud>
    </DivCard>
  );
}

export default React.memo(SidebarTag);