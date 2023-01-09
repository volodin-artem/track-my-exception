import React from 'react';
import "./preview-holder.sass";

function PreviewHolder(props) {
  return (
    <div className="center preview-holder">
      <div style={{ display: "inline-block" }}>
        <div className="left-holder">
          You’ve Got to Know about an Error to Fix It. Don't waste expensive time checking server
          logs every time something happens.View more screenshots and features
        </div>
        <div className="right-holder">
          <img src="https://www.muscula.com/static/dashboard-5fa6aace60014a206124229f885e28ac.webp" />
        </div>
      </div>
    </div>
  );
}

export default PreviewHolder;
