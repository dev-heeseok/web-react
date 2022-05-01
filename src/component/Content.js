import { Component } from 'react'

class Content extends Component {
  render(data) {
    console.log('Content render...');

    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Content;
