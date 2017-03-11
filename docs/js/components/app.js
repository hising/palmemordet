import React from 'react';
import {NavLink} from './navlink';
import {Home} from './home';
import {Newsletter} from './newsletter';

/*
import * as firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyAUjD0R-x5pEvCm7JLCIRGsJYGfcA28rRU',
  authDomain: 'palmemordet-430a4.firebaseapp.com',
  databaseURL: 'https://palmemordet-430a4.firebaseio.com',
  storageBucket: 'palmemordet-430a4.appspot.com',
  messagingSenderId: '237810585662'
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
  .then(function() {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
  */

export const App = React.createClass({
  render() {
    return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light fixed-top">
        <button className="navbar-toggler navbar-toggler-right"
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="">Palmemordet</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Hem</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="timeline">Tidslinje</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="video">Videos</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/page/tidslinje">Tidslinje i text</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/page/mordet">Mordet</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/page/links">Länkar</NavLink></li>
          </ul>
        </div>
      </nav>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {this.props.children || <Home />}
        </div>
        <div className="col-md-4">
          <Newsletter />
        </div>
      </div>
    </div>
    </div>
    );
  }
});
