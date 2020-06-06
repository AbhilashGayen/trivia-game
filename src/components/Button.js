import React from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, children, id }) => {
  return (
    <motion.button
      initial={{ opacity: 0.7 }}
      whileHover={{
        scale: 1.2,
        opacity: 0.9,
        textShadow: "0px 0px 1px rgb(255,255,255)",
        boxShadow: "0px 0px 3px rgb(255,255,255)",
      }}
      className="button"
      onClick={onClick}
      id={id}
    >
      {children}
    </motion.button>
  );
};

export default Button;
