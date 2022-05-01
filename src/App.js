import { Component } from 'react';
import './App.css';
import Subject from './component/Subject';
import TOC from './component/TOC';
import Content from './component/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 1,
      subject: {
        title: "WEB",
        desc: "World Wide Web!!"
      },
      welcome: {
        title: "Welcome",
        desc: "Hello, React!!"
      },
      content: [
        { id: 1, title: "HTML", desc: "HTML is information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" }
      ]
    }
  }

  render() {
    console.log('App render...');

    var _title, _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var _id = this.state.selected_content_id - 1;
      _title = this.state.content[_id].title;
      _desc = this.state.content[_id].desc;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome"
            });
          }.bind(this)}>
        </Subject>

        <TOC
          data={this.state.content}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: id
            });
          }.bind(this)}>
        </TOC>

        <Content
          title={_title}
          desc={_desc}>
        </Content>
      </div >
    );
  }
}

export default App;
