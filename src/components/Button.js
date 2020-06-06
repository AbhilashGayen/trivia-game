import React from "react";
import { motion } from "framer-motion";

// Button Component
const Button = ({ onClick, children, id, optionButton }) => {
  return (
    <motion.button
      initial={{ opacity: 0.7 }}
      whileHover={{
        scale: 1.2,
        opacity: 0.9,
        textShadow: "0px 0px 1px rgb(255,255,255)",
        boxShadow: "0px 0px 3px rgb(255,255,255)",
      }}
      className={`${optionButton ? "optionButton" : ""}`} //Adding optionsbutton class if quiz options 
      onClick={onClick}
      id={id}
    >
      {children}
    </motion.button>
  );
};

export default Button;
