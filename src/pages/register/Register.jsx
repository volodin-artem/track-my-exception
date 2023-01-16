import React, { useState } from 'react';
import "../login/login.sass";
import { useQuery } from "react-query";
import { useNavigate, Red } from "react-router";
import Logo from "../../component/logo/Logo.jsx";
import DefaultButton from "../../component/button/DefaultButton.jsx";
import Checkbox from "../../component/checkbox/Checkbox.jsx";
import configuration from "../../configuration.js";
import EmailValidator from "../../validators/EmailValidator.js";
import PasswordValidator from "../../validators/PasswordValidator.js";
import ErrorProvider from "../../component/errorProvider/ErrorProvider.jsx";
import { route as profileHref } from "../user/main/MainUserPage.jsx";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordsEqual, setPwdEqual] = useState(false);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const navigate = useNavigate();
  const {
    status, data, error, refetch,
  } = useQuery(
    "postUser",
    async () => {
      const response = await fetch(`${configuration.api.url}/post/user?email=${email}&password=${password}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    },
    { enabled: false },
  );

  return (
    <div className="f-screen background">
      <div className="flex justify-center flex-align-center">
        <div className="login-window">
          <div className="top-holder">
            <Logo />
          </div>
          <div className="middle-form">
            <p className="highlight-success def-size def-family bold">Register</p>
            <ErrorProvider errors={emailErrors}>
              <div className="input">
                <label className="def-size def-family">Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
              </div>
            </ErrorProvider>
            <ErrorProvider errors={passwordErrors}>
              <div className="input">
                <label className="def-size def-family">Password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    const confirmPassword = document.querySelector('input[type="password"]:nth-child(2)');
                    checkPasswords(confirmPassword, password, () => {
                      document.body.classList.add('h-succ-input');
                      setPwdEqual(true);
                    }, () => {
                      document.body.classList.add('h-error-input');
                      setPwdEqual(false);
                    });
                  }}
                />
              </div>
              <div className="input">
                <label className="def-size def-family">Confirm password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    const confirmPassword = e.target.value;
                    checkPasswords(confirmPassword, password, () => {
                      document.body.classList.add('h-succ-input');
                      setPwdEqual(true);
                    }, () => {
                      document.body.classList.add('h-error-input');
                      setPwdEqual(false);
                    });
                  }}
                />
              </div>
            </ErrorProvider>
            <div className="input flex justify-center flex-align-center">
              <Checkbox />
              <span className="def-size def-family checkbox-label">I've read and accepted  the terms of service</span>
            </div>
          </div>
          <DefaultButton
            text="Sign in"
            classes={["button", "login-button"]}
            onclick={async () => {
              const isEmailValid = new EmailValidator(email).validate();
              const isPasswordValid = new PasswordValidator(password).validate();
              if (isPasswordValid instanceof Error) {
                setPasswordErrors((prev) => [...prev, isPasswordValid]);
              }
              if (!isEmailValid) {
                setEmailErrors((prev) => [...prev, "Yo, dat email is not allowed"]);
                return;
              }
              if (!passwordsEqual) return;
              refetch().then((result) => {
                if (!result.error) {
                  window.localStorage.setItem("token", result.data.token);
                  navigate(profileHref.href);
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

function checkPasswords(password1, password2, onequal, onerror) {
  return password1 === password2 ? onequal() : onerror();
}
export const route = {
  href: "/register",
};
export default Register;
