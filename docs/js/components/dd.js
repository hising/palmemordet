import React from 'react';

export const Dd = React.createClass({
  render() {
    return (<dd className="col-md-8" {...this.props}>{this.props.content}</dd>);
  }
});
