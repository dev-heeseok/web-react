import { Component } from 'react';

import './App.css';
import Subject from './component/Subject';
import TOC from './component/TOC';
import Control from './component/Control';
import ReadContent from './component/ReadContent';
import CreateContent from './component/CreateContent';
import UpdateContent from './component/UpdateContent';

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

    var _article = null;
    if (this.state.mode === "welcome") {
      _article =
        <ReadContent
          title={this.state.welcome.title}
          desc={this.state.welcome.desc}
        ></ReadContent>
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.content.length) {
        if (this.state.content[i].id === this.state.selected_content_id) {
          _article =
            <ReadContent
              title={this.state.content[i].title}
              desc={this.state.content[i].desc}
            ></ReadContent>
          break;
        }
        i++;
      }
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        var find_last = function () {
          var last_id = 0;
          for (const data_item of this.state.content) {
            last_id = Math.max(last_id, data_item.id);
          }
          return last_id;
        }.bind(this);

        var _id = find_last() + 1;
        var _content = this.state.content.concat({
          id: Number(_id),
          title: _title,
          desc: _desc
        });

        this.setState({
          content: _content
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      var find_data = function () {
        var _data = null;
        var _id = this.state.selected_content_id;
        for (const data_item of this.state.content) {
          if (data_item.id === _id) {
            _data = data_item;
            break;
          }
        }
        return _data;
      }.bind(this);

      var _data = find_data();
      var _id = this.state.selected_content_id;

      _article = <UpdateContent
        title={_data.title}
        desc={_data.desc}
        onSubmit={function (_title, _desc) {
          console.log('update :', _id, _title, _desc);
          // var _content = this.state.content.concat({
          //   id: Number(_id),
          //   title: _title,
          //   desc: _desc
          // });

          // this.setState({
          //   content: _content
          // });
        }.bind(this)}></UpdateContent>
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.desc}
          onChangePage={function () {
            this.setState({
              mode: "welcome"
            });
          }.bind(this)}
        ></Subject>

        <TOC
          data={this.state.content}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id)
            });
          }.bind(this)}
        ></TOC>

        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode
            });
          }.bind(this)}
        ></Control>

        {_article}
      </div >
    );
  }
}

export default App;
