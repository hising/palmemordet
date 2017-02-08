import React from 'react';
import ReactDOM from 'react-dom';
import {App, Video, Timeline} from './components';
import {analytics} from './analytics';
import {Router, Route, browserHistory} from 'react-router';
import {isDev} from './utils';

let rootRoute = isDev ? '/' : '/palmemordet/';
let timelineRoute = rootRoute + 'timeline';
let videoRoute = rootRoute + 'video';

let routing = (
  <Router history={browserHistory}>
    <Route path={rootRoute} component={App}>
      <Route path={timelineRoute} component={Timeline}/>
      <Route path={videoRoute} component={Video}/>
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
