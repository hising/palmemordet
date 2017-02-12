import React from 'react';
import ReactDOM from 'react-dom';
import {App, Video, Timeline, Place, Person} from './components';
import {analytics} from './analytics';
import {Router, Route, hashHistory} from 'react-router';
import {createBrowserHistory} from 'history';

let history = createBrowserHistory();

history.listen(location => {
  analytics.trackPageview(location.hash.replace('#', ''));
});

let routing = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="timeline" component={Timeline}/>
      <Route path="video" component={Video}/>
      <Route path="/place/:placeName" component={Place}/>
      <Route path="/people/:personName" component={Person}/>
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
