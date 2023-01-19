import React, { useState } from 'react';
import "./login.sass";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import Logo from "../../component/logo/Logo.jsx";
import DefaultButton from "../../component/button/DefaultButton.jsx";
import user from "../../user.js";
import configuration from "../../configuration.js";
import { route as profileRoute } from "../user/main/MainUserPage.jsx";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    status, data, error, refetch,
  } = useQuery("getUser", async () => {
    const response = await fetch(`${configuration.api.url}/user?email=${email}&password=${password}`);
    return response.json();
  }, { enabled: false });

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
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input">
              <label className="def-size def-family">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <DefaultButton
            text="Sign in"
            classes={["button", "login-button"]}
            onclick={async () => {
              const response = await refetch();
              window.localStorage.setItem('token', response.data.token);
              navigate(profileRoute.href);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export const route = {
  href: "/login",
};
export default Login;
