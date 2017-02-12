import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Place extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>{this.props.params.placeName}</h2>
        Info om platsen {this.props.params.placeName}
      </div>
    );
  }
}

export default Place;
