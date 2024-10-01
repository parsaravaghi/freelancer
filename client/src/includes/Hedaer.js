
import '../css/includes.css';
import { Link  } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [clss , setclss] = useState("true");
  const [path , setPath] = useState(window.location.pathname);
  return (
    
    <>
      <header  className="header position-relative overflow-hidden ">
        <nav  className={"navbar navbar-expand-sm z-3 navbar-light"} >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon c-primary"></span>
            </button>
            <div className="collapse p-1 align-items-md-center justify-content-center navbar-collapse" id="navbarSupportedContent">
              <div className="">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about"className="nav-link" >About</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact"className="nav-link" >Contact</Link>
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