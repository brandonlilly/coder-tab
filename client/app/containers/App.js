import React, { Component } from 'react';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <h1>Client App</h1>
        {children}
      </div>
    );
  }
}

export default App;
