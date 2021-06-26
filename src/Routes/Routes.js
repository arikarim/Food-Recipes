import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Containers/Home';
import Header from '../Components/Header';
import FoodsDetail from '../Components/FoodsDetail';

const Routes = () => (
  <BrowserRouter>
    <div className="whole-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={FoodsDetail} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default Routes;
