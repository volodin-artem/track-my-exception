import React, { useEffect, useState } from 'react';
import NavItem from "./nav-item/NavItem.jsx";
import "./nav-bar.css";
import Logo from "../logo/Logo.jsx";
import DefaultButton from "../button/DefaultButton.jsx";
import { route as fHref } from "../../pages/features/Features.jsx";
import { route as pHref } from "../../pages/pricing/Pricing.jsx";
import { route as cHref } from "../../pages/contact/Contact.jsx";
import { route as bHref } from "../../pages/blog/Blog.jsx";
import { route as dHref } from "../../pages/documentation/Documentation.jsx";
import { route as userHref } from "../../pages/user/main/MainUserPage.jsx";
import user from "../../user.js";

function NavBar(props) {
  const [isUserExist, setUserExist] = useState(false);
  useEffect(() => {
    (async () => {
      setUserExist(await user.isExists());
    })();
  }, [isUserExist]);
  return (
    <div className="center nav-bar">
      <Logo />
      <div className="links-holder">
        <NavItem href={fHref.href} text="Features" />
        <NavItem href={pHref.href} text="Pricing" />
        <NavItem href={dHref.href} text="Documentation" />
        <NavItem href={cHref.href} text="Contact" />
        <NavItem href={bHref.href} text="Blog" />
      </div>
      <div className="links-holder">
        {
          isUserExist ? <DefaultButton href={userHref.href} text="Profile" /> : (
            <>
              <DefaultButton href="/register" text="Register" classes={["button"]} />
              <DefaultButton href="/login" text="Login" classes={["button"]} />
            </>
          )
        }
      </div>
    </div>
  );
}
export default NavBar;
