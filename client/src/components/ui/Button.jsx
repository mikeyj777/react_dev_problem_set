import React from "react";

const Button = ({size, color, variant, handleClick, text = "Default Button Text"}) => {
  return (
    <button 
      onClick={handleClick}
      className={`${size} ${color} ${variant}`}>
      {text}
    </button>
  );
};

export default Button;