import React from 'react';
import {NavLink} from './navlink';
import {Home} from './home';

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
      <ul className="nav">
        <li className="nav-item"><NavLink className="nav-link" to="/">Hem</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="timeline">Tidslinje</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="video">Videos</NavLink></li>
      </ul>

      <div className="row">
        <div className="col-md-12">
          {this.props.children || <Home />}
        </div>
      </div>
    </div>
    );
  }
});
