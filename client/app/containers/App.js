import React, { Component } from 'react';
import { CodeEditor, CodeMirror } from '../components';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');
require('codemirror/keymap/sublime');
require('codemirror/addon/comment/comment');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/selection/active-line');

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
      extraKeys: {
        "Cmd-/": "toggleComment",
        "Ctrl-/": "toggleComment"
      },
      viewportMargin: 1 / 0,
    };

    // const o = {
    //   mode: e.mode,
    //   theme: "solarized",
    //   indentUnit: e.tab_size,
    //   tabSize: e.tab_size,
    //   indentWithTabs: !1,
    //   extraKeys: {
    //     Tab: "indentMore",
    //     "Shift-Tab": "indentLess",
    //     "Cmd-/": "toggleComment",
    //     "Ctrl-/": "toggleComment"
    //   },
    //   lineNumbers: !0,
    //   lineWrapping: !0,
    //   autofocus: !0,
    //   autoCloseBrackets: "()[]{}",
    //   matchBrackets: !0,
    //   styleActiveLine: !0,
    //   viewportMargin: 1 / 0,
    // };

    return (
      <div>
        <h1>Client App</h1>
        <CodeMirror
          value={code}
          options={options}
          onChange={this.updateCode.bind(this)}
        />
      </div>
    );
  }
}

export default App;
