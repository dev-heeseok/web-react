import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

interface IPostUser {
  fullName: string,
  userName: string,
  email: string;
  password: string;
}

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const registered: IPostUser = {
      fullName: "empty",
      userName: "empty",
      email: email,
      password: password,
    };

    axios
      .post("/app/signup", registered)
      .then((response) => console.log(response.data));
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
            <>
              <Button
                className="btn btn-success btn-block"
                as="input"
                type="button"
                value="Sign in"
              />
              <Button
                className="btn btn-danger btn-block"
                as="input"
                type="submit"
                value="Sign up"
              />
            </>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
