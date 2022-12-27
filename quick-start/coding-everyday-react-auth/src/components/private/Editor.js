import React from 'react'
import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <section>
      <h1>Editor Page</h1>
      <br />
      <p>You must have been assiged an Editor role.</p>
      <div className='flexGrow'>
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default Editor