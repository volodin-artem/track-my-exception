import React from 'react';
import NavItem from "./nav-item/NavItem.jsx";
import "./nav-bar.css";
import Logo from "../logo/Logo.jsx";
import DefaultButton from "../button/DefaultButton.jsx";
import { href as fHref } from "../../pages/features/Features.jsx";
import { href as pHref } from "../../pages/pricing/Pricing.jsx";
import { href as cHref } from "../../pages/contact/Contact.jsx";
import { href as bHref } from "../../pages/blog/Blog.jsx";
import { href as dHref } from "../../pages/documentation/Documentation.jsx";

function NavBar(props) {
  return (
    <div className="center nav-bar">
      <Logo />
      <div className="links-holder">
        <NavItem href={fHref} text="Features" />
        <NavItem href={pHref} text="Pricing" />
        <NavItem href={dHref} text="Documentation" />
        <NavItem href={cHref} text="Contact" />
        <NavItem href={bHref} text="Blog" />
      </div>
      <div className="links-holder">
        <DefaultButton href="/register" text="Register" classes={["button"]} />
        <DefaultButton href="/login" text="Login" classes={["button"]} />
      </div>
    </div>
  );
}
export default NavBar;
