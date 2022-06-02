import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBarElements from "./components/Navbar/NavBarElements";
import Home from "./pages/Home";
import Document from "./pages/Document";
import About from "./pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarElements></NavBarElements>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Document" element={<Document />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
