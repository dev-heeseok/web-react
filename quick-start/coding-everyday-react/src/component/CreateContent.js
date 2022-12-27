import { Component } from 'react'

class CreateContent extends Component {
  render(data) {
    console.log('CreateContent render...');

    return (
      <article>
        <h2>Create</h2>
        <form
          action='/create_process'
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
              placeholder='title'
            ></input>
          </p>
          <p>
            <textarea
              name='description'
              placeholder='description'
            // cols='60'
            // rows='5'
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

export default CreateContent;
