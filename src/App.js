import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Questions from './pages/Questions'
import About from './pages/About'
import NavbarElements from './components/Navbars/NavbarElements';

function App() {
  return (
    <Router>
      <NavbarElements />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Questions' element={<Questions></Questions>} />
        <Route path='/About' element={<About></About>} />
      </Routes>
    </Router>
  );
}

export default App;
