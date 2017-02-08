import React from 'react';
import {NavLink} from './navlink';
import {Home} from './home';

export const App = React.createClass({
  render() {
    return (
    <div>
      <ul className="nav nav-pills nav-fill justify-content-center">
        <li className="nav-item"><NavLink className="nav-link" to="/">Hem</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="timeline">Tidslinje</NavLink></li>
      </ul>
      <div>
        {this.props.children || <Home />}
      </div>
    </div>);
  }
});
