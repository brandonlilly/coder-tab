import React, { Component } from 'react';
import jqconsole from 'jq-console';

class CodeConsole extends Component {

  handleSubmit(input, forced = false) {
    let log = console.log
    console.log = (...args) => { this.write(args.join(' ')); }

    if (forced) {
      this.write('> ', 'jqconsole-old-prompt');
      this.write('Running...', 'jqconsole-old-prompt');
    }
    try {
      const babelCode = babel(input).code.replace("'use strict';", '');
      let output = window.eval(babelCode);
      if (typeof output !== 'undefined' && output !== "use strict") {
        this.write(output, 'jqconsole-output')
      }
    }
    catch (e) {
      console.error(e);
      this.write(e, 'jqconsole-output jqc-error');
    }

    console.log = log;

    this.props.onSubmit && this.props.onSubmit(input);
  }

  write(output, className) {
    this.jqconsole.Write(output + '\n', className);
  }

  componentDidMount() {
    this.jqconsole = $(this.refs.jqconsole).jqconsole('Console initialized.\n', '> ');

    const handler = () => {
      this.jqconsole.Prompt(true, (input) => {
        this.handleSubmit(input);
        handler();
      });
    }
    handler();
  }

  prompt() {
    this.jqconsole.Prompt(false, (input) => {

    })
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
