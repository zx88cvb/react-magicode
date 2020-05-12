import React, {useState,
  useEffect,
  useRef
} from 'react';

import { createThrottle } from 'assets/helpers/throttle'
import {
  SpanArrow
} from './style';

function Arrow(props) {

  // 是否隐藏
  const [show, setShow] = useState(false);

  const arrowRef = useRef(0);

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

  const backTop = (e) => {
    // console.log(e.target.documentElement.scrollTop);
    window.scrollTo(0, 0);
    // let timer = setInterval(() => {
    //   let ispeed = Math.floor(-e.scrollTop / 5)
    //   document.documentElement.scrollTop = document.body.scrollTop = e.scrollTop + ispeed
    //   if (e.scrollTop === 0) {
    //     clearInterval(timer)
    //   }
    // }, 16)
  }

  return show? (
    <SpanArrow onClick={(e) => backTop(e)} ref={arrowRef}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-arrow-up-"></use>
      </svg>
    </SpanArrow>
  ): null;
}

export default React.memo(Arrow);