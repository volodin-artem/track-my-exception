import React from 'react';
import NavBar from "../../component/nav-bar/NavBar.jsx";
import Welcome from "./welcome/Welcome.jsx";
import "../../common.sass";
import Footer from "../../component/footer/Footer.jsx";
import { useQuery } from "react-query";
import configuration from "../../configuration.js";

function MainPage(props) {
  return (
    <>
      <NavBar />
      <Welcome />
      <Footer />
    </>
  );
}

export default MainPage;
