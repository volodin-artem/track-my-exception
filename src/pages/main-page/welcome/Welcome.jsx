import React from 'react';
import "./welcome.sass";
import "../../../component/button/small-button.sass";
import DefaultButton from "../../../component/button/DefaultButton.jsx";
import PreviewHolder from "../../../component/preview-holder/PreviewHolder.jsx";

function Welcome(props) {
  return (
    <>
      <div className="center welcome">
        <span>
          Track your
          <span className="error"> errors </span>
          and
          <span className="error"> exceptions </span>
          in your JavaScript projects for
          {' '}
          <span className="green">free</span>
          .
        </span>
        <div className="spacer">
          We are an error logging solution that allows you
          to conveniently collect and analyze errors on a website or application.
        </div>
        <div>
          <DefaultButton text="Yes! Help me save time" classes={["small-button", "success"]} href="/pricing" />
          <DefaultButton text="Contact to us" classes={["small-button", "white-border"]} href="/contact" />
        </div>
      </div>
      <PreviewHolder />
    </>
  );
}

export default Welcome;
