import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Questions from './screens/Questions';
import ReactDoc from './screens/ReactDoc';
import NaveBarElemen from './components/Navbar/NavBarElements';

function App() {
  return (
    // <div className='App'>
    //   <h1>Hello World</h1>
    // </div>
    <Router>
      <NaveBarElemen />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/Questions' element={<Questions />}/>
        <Route path='/ReactDoc' element={<ReactDoc />}/>
      </Routes>
    </Router>
    // <Route>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/About' element={<About />} />
    //     <Route path='/Projects' element={<Projects />} />
    //     <Route path='/Questions' element={<Questions />} />
    //     <Route path='/ReactDoc' element={<ReactDoc />} />
    //   </Routes >
    // </Route >
  );
}

export default App;
