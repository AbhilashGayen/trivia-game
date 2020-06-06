import React from "react";

const Button = ({ onClick, children, id }) => {
  return (
    <button onClick={onClick} id={id}>
      {children}
    </button>
  );
};

export default Button;
