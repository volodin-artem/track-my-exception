import React from 'react';
import "./button.css";

function Button(props) {
  return (
    <a className="button" href={props.href}>{props.text}</a>
  );
}

export default Button;
