import React from 'react';
import "./logo.css";

function Logo(props) {
  const logoText = "Track my exception";
  return (
    <div className="logo">
      <a href="/">{logoText}</a>
    </div>
  );
}

export default Logo;
