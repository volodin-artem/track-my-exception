import React from 'react';
import "./preview-holder.sass";

function PreviewHolder(props) {
  return (
    <div className="center preview-holder">
      <div style={{ display: "inline-block" }}>
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
