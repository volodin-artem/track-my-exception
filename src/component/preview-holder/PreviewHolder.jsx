import React from 'react';
import "./preview-holder.sass";

function PreviewHolder(props) {
  return (
    <div className={`center preview-holder ${props.classes ? props.classes.split(',').join(' ') : ""}`}>
      <div style={{ display: "inline-block", width: "100%" }}>
        <div className="left-holder">
          {props.text}
        </div>
        <div className="right-holder">
          {props.img}
        </div>
      </div>
    </div>
  );
}

export default PreviewHolder;
