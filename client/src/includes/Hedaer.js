
import '../css/includes.css';
import { Link  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../img/logo.jpeg'

function Header() {
  const [clss , setclss] = useState("true");
  const [path , setPath] = useState(window.location.pathname);
  return (
    
    <>
      <header  className="header position-relative overflow-hidden ">
        <nav  className={"navbar navbar-expand-sm z-3 text-light"} >
          <div className="container-fluid">
            <div className="logo">
              <Link className="navbar-brand" to="/"><img className='image-logo' src={logo} alt="" /></Link>
              <Link to="/login"><button className='btn icon-link-hover login-btn link-light '>ورود / ثبت نام</button></Link>
            </div>
            <button className="navbar-toggler" color="white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <box-icon name='menu' size="40px" color="white"></box-icon>
            </button>
            <div className="collapse p-1 align-items-md-center justify-content-center navbar-collapse" id="navbarSupportedContent">
              <div className="">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                    <Link to="/" className="link text--light" >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about"className="link text--light" >About</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/projects" className="link text--light"  >projects</Link>
                    </li>
                </ul>
              </div>
              
            </div>
            
          </div>
          <div className="search p-3 collapse navbar-collapse"><box-icon color="white" name='search' ></box-icon></div>
        </nav>
        
      </header>
    </>
  );
}

export default Header;