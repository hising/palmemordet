import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Person extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.personName}</h2>
        Info om person {this.props.params.personName}
      </div>
    );
  }
}

export default Person;
