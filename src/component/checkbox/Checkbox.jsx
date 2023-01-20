import React, { useState } from 'react';
import "./checkbox.sass";

function Checkbox(props) {
  const [isChecked, check] = useState(false);
  return (
    <div
      className="checkbox flex flex-align-center justify-center"
      onClick={(e) => {
        const svg = document.querySelector('.checkbox .checkbox-icon');
        svg.classList.toggle('hidden');
        check(() => true);
      }}
    >
      <svg className="checkbox-icon" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </div>
  );
}

export default Checkbox;
