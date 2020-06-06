import React from "react";
import { motion } from "framer-motion";
import Button from "./button";

// Score Component - displays quiz score

const Score = ({ refresh, score }) => {
  return (
    <section className="card">
      <h1>Your Score:</h1>
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
      {/* Resets quiz data */}
      <Button onClick={refresh}>Play Again</Button>
    </section>
  );
};

export default Score;
