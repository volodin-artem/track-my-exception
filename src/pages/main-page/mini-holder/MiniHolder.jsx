import React from 'react';
import "./mini-holder.sass";

function MiniHolder(props) {
  return (
    <div className="mini-holder">
      <div className="header"><h1>{props.header}</h1></div>
      <div className="desc">{props.desc}</div>
    </div>
  );
}

export default MiniHolder;
