
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const sharedRoutes = [
  {
    key: 'home',
    path: '/',
    component: lazy(() => import('@/pages/Index')),
    exact: true,
  },
  {
    key: 'notFound',
    path: '*',
    component: lazy(() => import('@/pages/NotFound')),
  }
];

export default sharedRoutes;
