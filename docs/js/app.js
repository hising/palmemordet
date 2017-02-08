import React from 'react';
import ReactDOM from 'react-dom';
import {App, Video, Timeline} from './components';
import {analytics} from './analytics';
import {Router, Route, browserHistory} from 'react-router';
import {isDev} from './utils';

let root = isDev ? '/' : '/palmemordet/';

let routing = (
  <Router history={browserHistory}>
    <Route path={root} component={App}>
      <Route path="timeline" component={Timeline}/>
      <Route path="video" component={Video}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  const appRoot = document.getElementById('app');
  if (appRoot) {
    ReactDOM.render(routing, appRoot);
  }
  analytics.init();
});
