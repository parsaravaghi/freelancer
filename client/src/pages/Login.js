import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { serverPath } from '../info';

function Login() {
  const navigate = useNavigate()
  useEffect(()=> {
      axios.get(`${serverPath}/auth` , {withCredentials : true})
      .then((res)=>{
          if(res.data.user)
          {
            navigate("/")
          }
      })
  },[])
  function form_submit(e)
  {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value

    axios.post(`${serverPath}/login` , {
      username : username , 
      password : password
    } , {withCredentials : true} )
    .then((res)=>{
      navigate("/")
    })
    .catch((error)=>{
      console.log(error.response.data)
    })

  }
  return (
    <>
      <div className="container login">
        <h2 className="text-center login-title" >ورود</h2>
        <form onSubmit={form_submit}>
          <div className="mb-3">
            <label className="form-label text-light" >نام کاربری</label>
            <input type="text" name='username' className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">رمز عبور</label>
            <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn bg--light-blue text-light " >ورود</button>
        </form>
        <p className="text-center mt-3 option text-light" >Don't have an account? <a href="#" >Sign up</a></p>
      </div>
    </>
  );
}

export default Login;