import React, { Component } from 'react';
import { CodeEditor, CodeMirror } from '../components';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');
require('codemirror/keymap/sublime');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: `// This is a test!

function test(arg) {
  render() {
    const { children } = this.props;
    const { code } = this.state;

    const options = {
      indentUnit: 2,
      smartIndent: true,
      tabSize: 2,
      keyMap: 'sublime',
    };

    return ( null );
  }
}`,
    };
  }

  updateCode(code) {
    this.setState({ code });
  }

  render() {
    const { children } = this.props;
    const { code } = this.state;

    const options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'spacegray',
      indentUnit: 2,
      smartIndent: true,
      tabSize: 2,
      keyMap: 'sublime',
    };

    return (
      <div>
        <h1>Client App</h1>
        <CodeEditor/>
        <CodeMirror
          value={code}
          options={options}
          onChange={this.updateCode.bind(this)}
        />
        {children}
      </div>
    );
  }
}

export default App;
