import { Component } from 'react'

class UpdateContent extends Component {
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
              e.target.title.value,
              e.target.description.value);
          }.bind(this)}
        >
          <p>
            <input
              type='text'
              name='title'
              defaultValue={this.props.title}
              placeholder='title'
            ></input>
          </p>
          <p>
            <textarea
              name='description'
              defaultValue={this.props.desc}
              placeholder='description'
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
