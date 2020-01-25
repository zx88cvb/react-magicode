import React, { lazy, Suspense } from "react";
import BlankLayout from "../layouts/blankLayout";
import HomePage from '../pages/home/index';

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

// 组件
const ArticleComponent = lazy(() => import("../pages/article/"));

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomePage,
        routes: [
          // {
          //   path: "/",
          //   exact: true,
          //   render: () => <Redirect to={"/recommend"} />
          // }
          {
            path: "/article",
            component: SuspenseComponent(ArticleComponent)
          }
        ]
      }
    ]
  }
];
