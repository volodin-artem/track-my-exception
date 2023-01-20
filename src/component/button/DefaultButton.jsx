import React from 'react';
import "./default-button.css";

function DefaultButton(props) {
  return (
    <a
      onClick={props.onclick || null}
      className={`${props.classes ? props.classes.slice(',').join(' ') : "button"}`}
      href={props.href}
    >
      {props.icon}
      {props.text}
    </a>
  );
}

export default DefaultButton;
