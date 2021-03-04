'use strick';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import routes from './routes/routes';

import { PublicRoute } from './components/common/Routes';

import Loader from './components/presentational/Loader';
import Swagger from './components/presentational/Swagger';

const App = () => {
   return (
      <>
         <Router>
            <header>
               <Swagger />
            </header>
            <Suspense fallback={<Loader />}>
               <Switch>
                  {routes.map(route => (
                     <PublicRoute key={route.path} {...route} />
                  ))}

                  <Redirect to="/" />
               </Switch>
            </Suspense>
         </Router>
      </>
   );
};

export default App;
