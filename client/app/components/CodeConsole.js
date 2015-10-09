import React, { Component } from 'react';
import jqconsole from 'jq-console';

class CodeConsole extends Component {

  handleSubmit(input) {
    try {
      let output = window.eval(input);
      if (typeof output !== 'undefined') {
        this.write(output)
      }
    }
    catch (e) {
      this.write(e, 'jqc-error');
    }

    this.props.onSubmit && this.props.onSubmit(input);
  }

  write(output, className) {
    this.jqconsole.Write(output + '\n', `jqconsole-output ${className}`);
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
