import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import withTracker from './components/withTracker';
import App from './components/Home/app';
import Embedded from './components/Embedded/embedded';
import Application from './components/Application/application';
import Web from './components/Web/web';
import Blog from './components/Blog/blog';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/Embedded" component={withTracker(Embedded)} />
          <Route path="/Application" component={withTracker(Application)} />
          <Route path="/Web" component={withTracker(Web)} />
          <Route path="/Blog" component={withTracker(Blog)} />
          <Route path="/" component={withTracker(App)} />
        </Switch>
      </div>
    </BrowserRouter>
  , document.querySelector('.initial-container'));
