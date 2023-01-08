import React from 'react';
import NavBar from "../../component/nav-bar/NavBar.jsx";
import Welcome from "./welcome/Welcome.jsx";
import "../../common.sass";

function MainPage(props) {
  return (
    <div className="">
      <NavBar />
      <Welcome />
    </div>
  );
}

export default MainPage;
