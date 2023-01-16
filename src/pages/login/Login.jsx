import React from 'react';
import "./login.sass";
import Logo from "../../component/logo/Logo.jsx";
import DefaultButton from "../../component/button/DefaultButton.jsx";

function Login(props) {
  return (
    <div className="f-screen background">
      <div className="flex justify-center flex-align-center">
        <div className="login-window">
          <div className="top-holder">
            <Logo />
          </div>
          <div className="middle-form">
            <div className="input">
              <label className="def-size def-family">Email</label>
              <input type="text" />
            </div>
            <div className="input">
              <label className="def-size def-family">Password</label>
              <input type="password" />
            </div>
          </div>
          <DefaultButton text="Sign in" classes={["button", "login-button"]} />
        </div>
      </div>
    </div>
  );
}

export const route = {
  href: "/login",
};
export default Login;
