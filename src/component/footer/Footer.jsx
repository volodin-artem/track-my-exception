import React from 'react';
import "./footer.sass";

function Footer(props) {
  return (
    <div className="footer">
      <div className="center flex">
        <div>
          Copyright ©Drop Table Users.All rights reserved.
        </div>
        <div>
          Privacy Policy
          Terms of Service
        </div>
      </div>
    </div>
  );
}

export default Footer;
