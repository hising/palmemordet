import React from 'react';
import ReactDOM from 'react-dom';
import {App, Video} from './components';
import {analytics} from './analytics';
import {Router, Route, Link, browserHistory} from 'react-router';

let routing = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="video" component={Video}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  const appRoot = document.getElementById('app');
  if (appRoot) {
    ReactDOM.render(<App />, appRoot);
  }
  analytics.init();
});
