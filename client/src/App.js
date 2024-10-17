import Header from './includes/Hedaer';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import 'boxicons';
import './css/main.css'
import Addproject from './admin/Addproject';
import Projects from './pages/Projects';
import Login from './pages/login';

function App() {

  const [url , setUrl] = useState(window.location.pathname)
  return (
    <>
    
      <BrowserRouter>
      
        <Header />
        <Routes>
          <Route path='/' element={<Main />}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/contact' element={<Contact />}  />
          <Route path='/addproject' element={<Addproject />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<><h1>not found</h1></>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
