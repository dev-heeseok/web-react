import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Login = () => {
  const { setAuth } = useAuth;

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('onClicked login');
  }

  return (

    <section>
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