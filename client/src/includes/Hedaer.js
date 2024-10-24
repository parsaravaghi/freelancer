
import '../css/includes.css';
import { Link, useLocation  } from 'react-router-dom';
import { Component, useEffect, useState } from 'react';
import logo from '../img/logo.jpeg'
import axios from 'axios';
import { serverPath } from '../info';

function Header(props) {
  const [username , setUsername] = useState("")
  const [userlogo , setuserlogo] = useState(<><Link to="/login"><button className='btn icon-link-hover login-btn link-light '>ورود / ثبت نام</button></Link></>)
  
  const location = useLocation()

  // calling api
  useEffect(()=>{
    axios.get(serverPath + "/auth" , {withCredentials : true} )
    .then((res)=>{
      if(res.data.auth)
      {
        setuserlogo(<box-icon type='solid' color="#EAD8B1" size="40px" name='user-circle'></box-icon>)
        setUsername(res.data.username)
      }
    })
  } , [location.pathname])

  return (
    
    <>
      <header className="header position-relative overflow-hidden ">
        <nav  className={"navbar navbar-expand-sm z-3 text-light"} >
          <div className="container-fluid">
            <div className="logo d-flex align-items-center justify-content-center gap-2 ">
              <Link className="navbar-brand" to="/"><img className='image-logo' src={logo} alt="" /></Link>
              {userlogo}{username}
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