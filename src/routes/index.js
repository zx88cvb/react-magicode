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
const LoginComponent = lazy(() => import("pages/login/index"));

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
        path: "/login",
        component: SuspenseComponent(LoginComponent),
        exact: true
      },
      {
        path: "/category/:cid",
        component: SuspenseComponent(CategoryComponent),
        exact: true
      },
      {
        path: "/tag/:tid",
        component: SuspenseComponent(CategoryComponent),
        exact: true
      },
      {
        path: "/article/:id",
        component: SuspenseComponent(ArticleComponent),
        exact: true
      },
      {
        path: "/news/:id",
        component: SuspenseComponent(ArticleComponent),
        exact: true
      }
    ]
  }
];
