import React from 'react';
import "./default-button.css";

function DefaultButton(props) {
  return (
    <a onClick={props.onclick || ""} className={`${props.classes ? props.classes.slice(',').join(' ') : ""}`} href={props.href}>{props.text}</a>
  );
}

export default DefaultButton;
