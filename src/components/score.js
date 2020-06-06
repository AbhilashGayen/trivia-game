import React from "react";
import { motion } from "framer-motion";

const Score = ({ score }) => {
  return (
    <section className="card">
      <h1>Your Score</h1>
      <motion.span
        initial={{ rotate: 90, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="result"
      >
        {score}
      </motion.span>
    </section>
  );
};

export default Score;
