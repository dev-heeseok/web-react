import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Missing from './components/Missing'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* we want to protect these routes */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  )
}

export default App