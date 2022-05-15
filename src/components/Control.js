import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
  onRandomizeColor: PropTypes.func
}

function createWarning(funcName) {
  return () => console.warn(funcName + ' is not defined');
}

const defaultProps = {
  onPlus: createWarning('onPlus'),
  onMinus: createWarning('onMinus'),
  onRandomizeColor: createWarning('onRandomizeColor')
}

export class Control extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onPlus}
        >+</button>
        <button
          onClick={this.props.onMinus}
        >-</button>
        <button
          onClick={this.props.onRandomizeColor}
        >Randomize Color</button>
      </div>
    )
  }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control