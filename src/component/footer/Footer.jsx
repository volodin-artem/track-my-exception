import React from 'react';
import "./footer.sass";
import { route as contactHref } from "../../pages/contact/Contact.jsx";

function Footer(props) {
  return (
    <div className="footer">
      <div className="center flex">
        <div>
          Copyright ©. All rights reserved.
        </div>
        <div>
          <a href={contactHref.href}>Privacy Policy</a>
          <a href={contactHref.href}>Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
