import React from 'react';
import "./footer.sass";
import { route as contactHref } from "../../pages/contact/Contact.jsx";
import { route as docHref } from "../../pages/documentation/Documentation.jsx";

function Footer(props) {
  return (
    <div className="footer">
      <div className="center flex">
        <div>
          Copyright ©. All rights reserved.
        </div>
        <div>
          <a href={contactHref.href}>Contact with us</a>
          <a href={docHref.href}>Documentation</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
