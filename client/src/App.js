import Header from './includes/Hedaer';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import 'boxicons';
import './css/main.css'
import Projects from './pages/Projects';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>
      <BrowserRouter >
      
        {/* set header for every routes */}
        <Header   />

        {/* setting elements for every location */}
        <Routes  >
          <Route path='/'  element={<Main  />}  />
          <Route path='/projects'   element={<Projects  />} />
          <Route path='/login'  element={<Login />}  />
          <Route path='/register' element={<Register />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/contact' element={<Contact />}  />
          

          {/* 404 error */}
          <Route path='*' element={<><h1>not found</h1></>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;
