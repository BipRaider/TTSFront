'use strick';

import React from 'react';
import { Route } from 'react-router-dom';

export default function PublicRoute({ component: Component, ...routeProps }) {
   return <Route {...routeProps} render={props => <Component {...props} />} />;
}
