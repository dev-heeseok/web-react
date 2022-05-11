import { Component } from 'react'

class UpdateContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      desc: this.props.desc
    }

    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(data) {
    console.log('UpdateContent render...');

    return (
      <article>
        <h2>Update</h2>
        <form
          action='/update_process'
          method='post'
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.title,
              this.state.desc);
          }.bind(this)}
        >
          <p>
            <input
              type='text'
              name='title'
              value={this.state.title}
              placeholder='title'
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              name='desc'
              value={this.state.desc}
              placeholder='description'
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input
              type='submit'
            ></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
