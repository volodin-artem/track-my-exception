import React from 'react';
import "./welcome.sass";

function Welcome(props) {
  return (
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
    </div>
  );
}

export default Welcome;
