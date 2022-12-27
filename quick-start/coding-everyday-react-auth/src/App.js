import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Layout from './components/Layout';

import Login from './components/public/Login';
import Register from './components/public/Register';
import LinkPage from './components/public/LinkPage';
import Unauthorized from './components/public/Unauthorized';
import Missing from './components/public/Missing';

import Home from './components/private/Home';
import Editor from './components/private/Editor';
import Admin from './components/private/Admin';
import Lounge from './components/private/Lounge';
import RequireAuth from './components/RequireAuth';

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
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Editor, ROLES.Admin]} />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path='editor' element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path='lounge' element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  )
}

export default App