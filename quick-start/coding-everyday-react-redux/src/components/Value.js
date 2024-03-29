import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  number: PropTypes.number
}

const defaultProps = {
  number: -1
}

export class Value extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}

Value.propTypes = propTypes
Value.defaultProps = defaultProps;

export default Value