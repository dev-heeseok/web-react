import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavbarElement from "./components/NavbarElement";
import Home from "./pages/Home";
import Document from "./pages/Document";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <NavbarElement></NavbarElement>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Document" element={<Document />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
