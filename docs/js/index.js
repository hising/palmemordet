import React from 'react';
import ReactDOM from 'react-dom';
import {App, Video, Timeline, Place, Person, Page} from './components';
import {analytics} from './analytics';
import {BrowserRouter as Router, Route} from "react-router-dom";

let routing = (
  <Router>
    <Route path="/" exact  component={App} />
    <Route path="/timeline" component={Timeline}/>
    <Route path="/video" component={Video}/>
    <Route path="/place/:placeName" component={Place}/>
    <Route path="/people/:personName" component={Person}/>
    <Route path="/page/:pageName" component={Page} />
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  const appRoot = document.getElementById('app');
  if (appRoot) {
    ReactDOM.render(routing, appRoot);
  }
  analytics.init();
});
