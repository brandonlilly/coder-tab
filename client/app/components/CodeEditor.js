import React, { Component } from 'react';

class CodeEditor extends Component {

  render() {
    const code = "This is my code";

    return (
      <div className='codeEditor'>
        <textarea defaultValue={code} />
      </div>
    );
  }
}

export default CodeEditor;
