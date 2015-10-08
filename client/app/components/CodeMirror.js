// www.github.com/JedWatson/react-codemirror

import React, { Component } from 'react';
import { fromTextArea } from 'codemirror';
import { classSet } from '../utils';

class CodeMirror extends Component {
  static propTypes = {
		onChange: React.PropTypes.func,
		onFocusChange: React.PropTypes.func,
		options: React.PropTypes.object,
		path: React.PropTypes.string,
		value: React.PropTypes.string
	}

  constructor(props) {
    super(props);
    this.state = { focused: false };
  }

  componentDidMount () {
    const { value, options } = this.props;

    this.codeMirror = fromTextArea(this.refs.textarea, options);
    this.codeMirror.on('change', this.codemirrorValueChanged.bind(this));
    this.codeMirror.on('focus', () => this.focusChanged(true));
    this.codeMirror.on('blur', () => this.focusChanged(false));
    this._currentCodemirrorValue = this.props.value;
  }

	componentWillUnmount() {
		if (this.codeMirror) {
			this.codeMirror.toTextArea();
		}
	}

	componentWillReceiveProp(nextProps) {
		if (this.codeMirror && this._currentCodemirrorValue !== nextProps.value) {
			this.codeMirror.setValue(nextProps.value);
		}

    if (typeof nextProps.options === 'object') {
      for (optionName in nextProps.options) {
        this.codeMirror.setOption(optionName, nextProps.options[optionName]);
      }
    }
	}

	getCodeMirror() {
		return this.codeMirror;
	}

	focus() {
		this.codeMirror && this.codeMirror.focus();
	}

	focusChanged(focused) {
		this.setState({ focused: focused });
		this.props.onFocusChange && this.props.onFocusChange(focused);
	}

	codemirrorValueChanged(doc, change) {
		const newValue = doc.getValue();
		this._currentCodemirrorValue = newValue;
		this.props.onChange && this.props.onChange(newValue);
	}

	render() {
    const { path, value } = this.props;

    const className = classSet({
      'ReactCodeMirror': true,
      'ReactCodeMirror--focused': this.state.focused,
    });

		return (
			<div className={className}>
				<textarea
          ref="textarea"
          name={path}
          defaultValue={value}
          autoComplete="off"
        />
			</div>
		);
	}

}


export default CodeMirror;
