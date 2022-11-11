import React from 'react'
import '../login/login.css'

function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className='loginLogo'>SnehaSocial</h3>
              <span className="loginDesc">
                Connect with Friends and Family around the world on SnehaSocial.
              </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
              <input placeholder='Username' className="loginInput" />
                <input placeholder='Email' className="loginInput" />
                <input placeholder='Password' className="loginInput" />
                <input placeholder='Confirm Password' className="loginInput" />
                <button className="loginButton">Sign up</button>
                <button className="loginRegisterButton">Login into Account</button>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Register