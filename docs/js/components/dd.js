import React from 'react';

export const Dd = React.createClass({
  render() {
    return (<dl className="col-md-8">{this.props.content}</dl>);
  }
});
