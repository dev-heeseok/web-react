import React from 'react'
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword, loginUser } from '../reducers/loginReducer';

function LoginPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(state => state.login.email);
  const password = useSelector(state => state.login.password);

  const onChangeEmail = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const onChangePassword = (event) => {
    dispatch(setPassword(event.target.value));
  };
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(loginUser({ email: email, password: password }))
      .then(res => {
        const result = unwrapResult(res);
        if (result.loginSuccess) {
          navigate('/register');
        }
        else {
          alert('incorrect password');
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div>
      <h3>LoginPage</h3>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={onChangeEmail}></input>
        <label>Password</label>
        <input type="password" value={password} onChange={onChangePassword}></input>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage