import React, { Component } from 'react';
import { CodeEditor, CodeMirror, SplitView, CodeConsole } from '../components';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');
require('codemirror/keymap/sublime');
require('codemirror/addon/comment/comment');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/selection/active-line');

const initial = `// This is a test!

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
}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: initial
    };
  }

  updateCode(code) {
    this.setState({ code });
  }

  run() {
    const { code } = this.state;
    const { codeConsole } = this.refs;
    codeConsole.handleSubmit(code);
  }

  render() {
    const { children } = this.props;
    const { code } = this.state;

    const options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'rubella',
      styleActiveLine: true,
      tabSize: 2,
      indentUnit: 2,
      smartIndent: true,
      indentWithTabs: false,
      autoCloseBrackets: "()[]{}",
      matchBrackets: true,
      readOnly: false,
      keyMap: 'sublime',
      extraKeys: { "Cmd-/": "toggleComment", "Ctrl-/": "toggleComment" },
      viewportMargin: Infinity,
    };

    return (
      <div>
        <h1>Client App</h1>
        <SplitView>
          <CodeMirror
            value={code}
            options={options}
            onChange={this.updateCode.bind(this)}
            onRun={() => this.run()}
          />
        <CodeConsole
          ref="codeConsole"
          />
        </SplitView>
      </div>
    );
  }
}

export default App;
