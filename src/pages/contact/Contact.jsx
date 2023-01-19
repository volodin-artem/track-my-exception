import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula as colorSchema } from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";
import NavBar from "../../component/nav-bar/NavBar.jsx";
import PreviewHolder from "../../component/preview-holder/PreviewHolder.jsx";
import configuration from "../../configuration.js";
import Footer from "../../component/footer/Footer.jsx";
import MiniHolder from "../../component/mini-holder/MiniHolder.jsx";

function Contact(props) {
  return (
    <>
      <NavBar />
      <div className="center">
        <div className="flex flex-align-center column">
          <div className="title text-center-align">
            <p>Support</p>
          </div>
          <div style={{ width: "100%" }}>
            <MiniHolder
              header="Contact with us"
              desc={(
                <div>
                  If you got some questions, problems, offers you can contact us at our email:
                  {' '}
                  <span
                    className="concentrate"
                  >
                    trackmyexception@gmail.com
                  </span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const route = {
  href: "/contact",
};
export default Contact;
