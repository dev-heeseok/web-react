import { Component } from 'react'

class TOC extends Component {
  shouldComponentUpdate(_newprops, _newstate) {
    return this.props.data !== _newprops.data ? true : false;
  }
  render() {
    console.log('TOC render...');

    var lists = [];
    var data = this.props.data;

    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={'/component/' + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          // onClick={function(id, e) {
          //   e.preventDefault();
          //   this.props.onChangePage(id);
          // }.bind(this, data[i].id)}
          >{data[i].title}
          </a>
        </li>)

      i = i + 1;
    }

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;