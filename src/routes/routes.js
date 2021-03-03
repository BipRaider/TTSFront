/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react';

export default [
   {
      path: '/',
      exact: true,
      component: lazy(() =>
         import(
            '../components/views/RegisterPage/RegisterPage.js' /* webpackChunkName: "home-page" */
         ),
      ),
      restricted: false,
   },
];
