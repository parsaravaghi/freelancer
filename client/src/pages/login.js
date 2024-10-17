import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="container login" style={{ backgroundColor: 'var(--dark-blue)', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
      <h2 className="text-center login-title" >ورود</h2>
      <form>
        <div className="mb-3">
          <label className="form-label text-light" >نام کاربری</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">رمز عبور</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn bg--light-blue text-light " >ورود</button>
      </form>
      <p className="text-center mt-3 text-light" >Don't have an account? <a href="#" style={{ color: 'var(--light-blue)' }}>Sign up</a></p>
    </div>
  );
}

export default Login;