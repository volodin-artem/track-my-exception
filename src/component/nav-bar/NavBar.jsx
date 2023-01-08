import React from 'react';
import NavItem from "./nav-item/NavItem.jsx";
import "./nav-bar.css";
import Logo from "../logo/Logo.jsx";
import Button from "../button/Button.jsx";

function NavBar(props) {
  return (
    <div className="center nav-bar">
      <Logo />
      <div className="links-holder">
        <NavItem href="/features" text="Features" />
        <NavItem href="/pricing" text="Pricing" />
        <NavItem href="/documentation" text="Documentation" />
        <NavItem href="/contact" text="Contact" />
        <NavItem href="/blog" text="Blog" />
      </div>
      <div className="links-holder">
        <Button href="/register" text="Register" />
        <Button href="/login" text="Login" />
      </div>
    </div>
  );
}
export default NavBar;
