import React from 'react';

export const Dt = React.createClass({
  render() {
    return (<dt className="col-md-4">{this.props.content}</dt>);
  }
});
