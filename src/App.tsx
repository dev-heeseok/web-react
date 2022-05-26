import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

interface IPostUser {
  fullName: string;
  userName: string;
  email: string;
  password: string;
}

function App() {
  const [fullName, setFullName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const registered: IPostUser = {
      fullName: fullName,
      userName: userName,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/user/signup", registered)
      .then((response) => console.log(response.data));
  };

  const onChangeFullName = (e: any) => {
    const { value } = e.target;
    setFullName(value);
  };
  const onChangeUserName = (e: any) => {
    const { value } = e.target;
    setUserName(value);
  };
  const onChangeEmail = (e: any) => {
    const { value } = e.target;
    setEmail(value);
  };
  const onChangePassword = (e: any) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <div>
      <div className="container">
        <div className="form-div">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={onChangeFullName}
              name="fullName"
              value={fullName}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="User Name"
              onChange={onChangeUserName}
              name="userName"
              value={userName}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="E-mail"
              onChange={onChangeEmail}
              value={email}
              className="form-control form-group"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
              value={password}
              className="form-control form-group"
            />
            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
