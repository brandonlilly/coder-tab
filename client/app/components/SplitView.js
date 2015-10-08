import React, { Component } from 'react';

class SplitView extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="splitView">
        {children}
      </div>
    );
  }
}

export default SplitView;
