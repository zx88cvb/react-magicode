import React, {useState,
  useEffect
} from 'react';

import { createThrottle } from 'assets/helpers/throttle'
import {
  SpanArrow
} from './style';

function Arrow(props) {

  // 是否隐藏
  const [show, setShow] = useState(false);

  useEffect(()=>{
    const listener = createThrottle(()=>{
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== show) {
        setShow(shouldShow);
      }
    }, 160);
    document.addEventListener('scroll', listener);
    return ()=>document.removeEventListener('scroll', listener); // 组件销毁后，取消监听
  }, [show] /* 依赖记得给上，否则死循环 */)

  const backTop = () => {
    window.scrollTo(0, 0);
  }

  return show? (
    <SpanArrow onClick={() => backTop()}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-arrow-up-"></use>
      </svg>
    </SpanArrow>
  ): null;
}

export default React.memo(Arrow);