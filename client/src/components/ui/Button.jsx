import React from "react";

const Button = ({size, color, variant, onClick, text = "Default Button Text"}) => {
  return (
    <button 
      onClick={onClick}
      className={`${size} ${color} ${variant}`}>
      {text}
    </button>
  );
};

export default Button;