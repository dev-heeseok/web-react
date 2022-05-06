import { Component } from 'react'

class Subject extends Component {
  render() {
    console.log('Subject render...');

    return (
      <header>
        <h1><a href='/' onClick={function (e) {
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)
        }>{this.props.title}</a></h1>
        {this.props.desc}
      </header>
    );
  }
}

export default Subject;
