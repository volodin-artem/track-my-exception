import React from 'react';
import "../login/login.sass";
import Logo from "../../component/logo/Logo.jsx";
import DefaultButton from "../../component/button/DefaultButton.jsx";
import Checkbox from "../../component/checkbox/Checkbox.jsx";

function Register(props) {
  return (
    <div className="f-screen background">
      <div className="flex justify-center flex-align-center">
        <div className="login-window">
          <div className="top-holder">
            <Logo />
          </div>
          <div className="middle-form">
            <p className="highlight-success def-size def-family bold">Register</p>
            <div className="input">
              <label className="def-size def-family">Email</label>
              <input type="text" />
            </div>
            <div className="input">
              <label className="def-size def-family">Password</label>
              <input type="password" />
            </div>
            <div className="input">
              <label className="def-size def-family">Confirm password</label>
              <input type="password" />
            </div>
            <div className="input flex justify-center flex-align-center">
              <Checkbox />
              <span className="def-size def-family checkbox-label">I've read and accepted  the terms of service</span>
            </div>
          </div>
          <DefaultButton text="Sign in" classes={["button", "login-button"]} />
        </div>
      </div>
    </div>
  );
}

// todo fix all links component to export object with href dude
const href = "/register";
export { href };
export default Register;
