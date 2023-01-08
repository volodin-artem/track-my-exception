import React from 'react';
import "./nav-item.css";

function NavItem(props) {
  return (
    <button type="button" className="nav-item">
      <a href={props.href}>
        {props.text}
      </a>
    </button>
  );
}

export default NavItem;
