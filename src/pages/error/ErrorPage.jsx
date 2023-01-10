import "../../index.css";
import React from 'react';
import { useRouteError } from "react-router";
import NavBar from "../../component/nav-bar/NavBar.jsx";
import Footer from "../../component/footer/Footer.jsx";

function ErrorPage(props) {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="center">{"Error! " + error.statusText}</div>
      <Footer />
    </>
  );
}
export default ErrorPage;
