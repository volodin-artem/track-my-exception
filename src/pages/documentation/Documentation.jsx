import React from 'react';
import { darcula as colorSchema } from "react-syntax-highlighter/dist/esm/styles/hljs";
import NavBar from "../../component/nav-bar/NavBar.jsx";
import Footer from "../../component/footer/Footer.jsx";
import MiniHolder from "../../component/mini-holder/MiniHolder.jsx";
import PreviewHolder from "../../component/preview-holder/PreviewHolder.jsx";
import "./documentation.sass";
import SyntaxHighlighter from "react-syntax-highlighter";
import configuration from "../../configuration.js";

function Documentation(props) {
  return (
    <>
      <NavBar />
      <div className="center">
        <div className="flex flex-align-center column allow-counter">
          <div className="title text-center-align">
            <p>Documentation</p>
            <p>Learn how start tracking errors and exceptions with us!</p>
          </div>
          <div style={{ width: "100%" }}>
            <PreviewHolder
              img={<img src="/image/login-register-button.png" style={{ padding: "5rem" }} />}
              text={(
                <div>
                  <h1>Register an account</h1>
                  {' '}
                  To use all functionality you need to register for an account. Start with a free plan and upgrade any time.
                  No credit card required. Click the Register button in the top right corner of the website.
                </div>
              )}
            />
            <PreviewHolder
              img={<img src="/image/createProject.png" />}
              text={(
                <div>
                  <h1>Create a new project</h1>
                  {' '}
                  To use all functionality you need to register for an account. Start with a free plan and upgrade any time.
                  No credit card required. Click the Register button in the top right corner of the website."
                </div>
              )}
            />
            <PreviewHolder
              img={(
                <div className="def-family def-size" style={{ padding: "1rem" }}>
                  Add this code into your HTML page
                  <SyntaxHighlighter language="html" style={colorSchema} showLineNumbers>
                    {`<script src=${configuration.getFettyPath}></script>`}
                  </SyntaxHighlighter>
                </div>
)}
              text={(
                <div>
                  <h1>Add FettyJS in your HTML as first script in your document</h1>
                  You are get library to track exceptions
                </div>
              )}
            />
            <PreviewHolder
              img={(
                <div style={{ padding: "1rem" }} className="def-size def-family">
                  Add this code into your index script and configure it
                  <SyntaxHighlighter language="javascript" style={colorSchema} showLineNumbers>
                    const Fetty = new Fetty();
                    Fetty.goTrack("YOUR_API_KEY_IN_PROJECTS_PAGE");
                  </SyntaxHighlighter>
                </div>
              )}
              text={(
                <div>
                  <h1>Configure Fetty in your JS</h1>
                </div>
              )}
            />
            <PreviewHolder
              img={<></>}
              text={(
                <div>
                  <h1>Done! You're actually now tacking your exceptions!</h1>
                  You can see your exceptions and errors in your profile. Just select it!
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
  href: "/documentation",
};
export default Documentation;
