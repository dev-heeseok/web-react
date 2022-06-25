import axios from 'axios';
import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const LOGIN_URL = '/api/users/login';

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(LOGIN_URL, {
        userName: user,
        password: pwd
      })
      .then(res => {
        const accessToken = res?.data?.accessToken;
        const roles = res?.data?.roles;

        // clear state and controlled inputs
        setAuth({ user, pwd, roles, accessToken });
        setUser('');
        setPwd('');

        navigate(from, { replace: true });
      })
      .catch(err => {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err?.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err?.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }

        errRef.current?.focus();
      });
  }

  return (

    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
      >
        {errMsg}
      </p>

      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />

        <button>Sign In</button>
      </form>

      <p>
        Need an Account?<br />
        <span className='line'>
          <Link to="/register">Sign Up</Link>
        </span>
      </p>

    </section>
  )
}

export default Login