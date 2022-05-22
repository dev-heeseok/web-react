import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      userName: '',
      email: '',
      password: ''
    }

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeFullName(event) {
    this.setState({
      fullName: event.target.value
    });
  }

  onChangeUsername(event) {
    this.setState({
      userName: event.target.value
    });
  }

  onChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:4000/app/signup', registered)
      .then(response => console.log(response.data))



  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input type='text'
                placeholder="Full Name"
                onChange={this.onChangeFullName}
                value={this.state.fullName}
                className='form-control form-group'
              />

              <input type='text'
                placeholder="Username"
                onChange={this.onChangeUsername}
                value={this.state.userName}
                className='form-control form-group'
              />

              <input type='text'
                placeholder="E-mail"
                onChange={this.onChangeEmail}
                value={this.state.email}
                className='form-control form-group'
              />

              <input type='password'
                placeholder="Password"
                onChange={this.onChangePassword}
                value={this.state.password}
                className='form-control form-group'
              />

              <input type='submit'
                className='btn btn-danger btn-block'
                value='Submit'
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App; 