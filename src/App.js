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
      selected_content_id: 0,
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

  getReadContent() {
    var _content = null;

    var i = 0;
    while (i < this.state.content.length) {
      if (this.state.content[i].id === this.state.selected_content_id) {
        _content = this.state.content[i];
        break;
      }
      i++;
    }

    return _content;
  }

  getContent() {
    var _article = null;

    if (this.state.mode === "welcome") {
      _article = <ReadContent
        title={this.state.welcome.title}
        desc={this.state.welcome.desc}
      ></ReadContent>
    } else if (this.state.mode === "read") {
      const read_content = this.getReadContent();
      if (read_content) {
        _article = <ReadContent
          title={read_content.title}
          desc={read_content.desc}
        ></ReadContent>
      }
    } else if (this.state.mode === 'create') {
      _article = <CreateContent
        onSubmit={function (_title, _desc) {
          let find_last = function () {
            let last_id = 0;
            for (const data_item of this.state.content) {
              last_id = Math.max(last_id, data_item.id);
            }
            return last_id;
          }.bind(this);

          let _id = find_last() + 1;
          let _content = this.state.content.concat({
            id: Number(_id),
            title: _title,
            desc: _desc
          });

          this.setState({
            content: _content,
            mode: 'read',
            selected_content_id: _id
          });
        }.bind(this)}
      ></CreateContent>
    } else if (this.state.mode === 'update') {
      const read_content = this.getReadContent();
      if (read_content) {
        _article = <UpdateContent
          title={read_content.title}
          desc={read_content.desc}
          onSubmit={function (_title, _desc) {
            var _content = Array.from(this.state.content);
            for (let _data of _content) {
              if (_data.id === this.state.selected_content_id) {
                _data.title = _title;
                _data.desc = _desc;
                break;
              }
            }

            this.setState({
              content: _content,
              mode: 'read'
            });
          }.bind(this)}
        ></UpdateContent>
      }
    }

    return _article;
  }

  render() {
    console.log('App render...');

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.desc}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
              selected_content_id: 0
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
            if (_mode === 'delete') {
              if (window.confirm('really?')) {
                let _content = Array.from(this.state.content);

                let i = 0;
                while (i < _content.length) {
                  if (_content[i].id === this.state.selected_content_id) {
                    _content.splice(i, 1);
                    break;
                  }
                  i++;
                }

                const prev_id = this.state.selected_content_id;
                this.setState({
                  mode: 'welcome',
                  content: _content,
                  selected_content_id: 0
                });

                if (prev_id !== 0)
                  alert('delete successful!')
              }
            } else {
              this.setState({
                mode: _mode
              });
            }
          }.bind(this)}
        ></Control>

        {this.getContent()}
      </div >
    );
  }
}

export default App;
