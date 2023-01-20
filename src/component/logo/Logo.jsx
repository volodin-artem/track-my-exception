import React from 'react';
import "./logo.css";

function Logo(props) {
  const logoText = "Track my exception";
  return (
    <div className="">
      <a href="/">
        <img src="/image/logo.gif" width="250" height="50" />
      </a>
    </div>
  );
}

export default Logo;
