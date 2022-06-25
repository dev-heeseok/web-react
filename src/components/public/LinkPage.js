import React from 'react'
import { Link } from 'react-router-dom'

const LinkPage = () => {
  return (
    <section>
      <h1>Links</h1>
      <br />
      <h2>Public</h2>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <br />
      <h2>Private</h2>
      <Link to="/">Home</Link>
      <Link to="/editor">Editor</Link>
      <Link to="/admin">Admin</Link>
    </section>
  )
}

export default LinkPage