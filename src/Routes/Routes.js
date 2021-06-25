import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Containers/Home';

const Routes = () => (
  <BrowserRouter>
    <div className="whole-container">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/:id" component={MovieDetail} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default Routes;
