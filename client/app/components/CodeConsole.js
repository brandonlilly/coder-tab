import React, { Component } from 'react';
import jqconsole from 'jq-console';

class CodeConsole extends Component {

  startPrompt() {
    return this.jqconsole.Prompt(true, (input) => {
      try {
        let output = eval(input) + '\n';
        this.jqconsole.Write(output, 'jqconsole-output');
      }
      catch(e) {
        this.jqconsole.Write(e + '\n', 'jqconsole-output jqc-error');
      }
      this.startPrompt();
    });
  }

  componentDidMount() {
    console.log('jqref', this.refs.jqconsole);
    this.jqconsole = $(this.refs.jqconsole).jqconsole('Console initialized.\n', '> ');
    this.startPrompt();
  }

  render() {

    return (
      <div className="codeConsole">
        <div className="jqConsoleWrapper">
          <div
            className="console"
            ref="jqconsole"
          />
        </div>
      </div>
    )
  }
}

export default CodeConsole;
