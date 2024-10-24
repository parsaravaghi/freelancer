import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Navigate  } from 'react-router-dom';
import { serverPath } from '../info';

function Register() {
    // Setting values
    const [redirect , setRedirect] = useState(<></>)

    useEffect(()=> {
        axios.get(`${serverPath}/authpage` , {withCredentials : true})
        .then((res)=>{
            if(res.data.user)
            {
                setRedirect(<><Navigate to="/" /></>)
            }
        })
    },[])

    function form_submit(e)
    {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        const repassword = e.target.repassword.value
        const email = e.target.email.value

        if(password == repassword)
        {
            // Sending request to the server
            axios.post("http://localhost:8080/register" , {
                username : username , 
                password : password ,
                email :email
                }, { withCredentials : true }
            )
            .then((response )=>{
                // getting request if we havent got error
                setRedirect(<><Navigate to="/" /></>)
            })
            .catch((error)=>{
                console.log(error.response.data)
            })
        }
    }

    return (
        <>
        {redirect}
            <div className="container login" style={{marginTop : "30px"}} >
            <h2 className="text-center login-title" >ثبت نام</h2>
            <form onSubmit={form_submit}>
                <div className="mb-3">
                <label className="form-label text-light" >نام کاربری</label>
                <input type="text" name='username' className="form-control"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                <label className="form-label text-light">رمز عبور</label>
                <input type="password" name='password' className="form-control"  />
                </div>
                <div className="mb-3">
                <label className="form-label text-light">تکرار رمز عبور</label>
                <input type="password" name='repassword' className="form-control" />
                </div>
                <div className="mb-3">
                <label className="form-label text-light">ایمیل</label>
                <input type="email" name='email' className="form-control"  />
                </div>
                <button type="submit" className="btn bg--light-blue text-light " >ثبت نام</button>
            </form>
            <p className="text-center mt-3 option text-light" >Don't have an account? <a href="#" >Sign up</a></p>
            </div>
        </>
    );
}

export default Register;