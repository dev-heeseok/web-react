import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './components/Counter'

const propTypes = {

}

const defaultProps = {

}

export class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App