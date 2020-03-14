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
const ArticleComponent = lazy(() => import("pages/article/index"));
const CategoryComponent = lazy(() => import("pages/category/index"));

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true,
        routes: [
          // {
          //   path: "/",
          //   exact: true,
          //   render: () => <Redirect to={"/recommend"} />
          // }
        ]
      },
      {
        path: "/category/:id",
        component: SuspenseComponent(CategoryComponent),
        exact: true
      },
      {
        path: "/article/:id",
        component: SuspenseComponent(ArticleComponent),
        exact: true
      }
    ]
  }
];
