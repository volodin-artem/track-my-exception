import "../../index.css";
import React from 'react';
import { useRouteError } from "react-router";
import NavBar from "../../component/nav-bar/NavBar.jsx";

function ErrorPage(props) {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="center">{"Error! " + error.statusText}</div>
    </>
  );
}
export default ErrorPage;
