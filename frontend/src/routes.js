import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Players = lazy(() => import('./components/pages/players/players'))

let Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Players}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes