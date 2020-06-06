import React from "react";
import Button from "./button";
import Timer from "./timer";
import { motion } from "framer-motion";

// Card Component

const Card = (props) => {
  const {
    question,
    correct_answer,
    incorrect_answers,
    checkAnswerFunction,
    duration,
    currentQuestion,
    totalQuestions,
  } = props;
  // Concatenating correct_answers and worng_answers into single array
  const answers = [correct_answer].concat(incorrect_answers).sort(); //TODO: Implement array shuffle, but settling for sort now
  return (
    <motion.div
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="card"
    >
      <p>
        {currentQuestion + 1}/{totalQuestions}
      </p>

      <Timer duration={duration} timeoutFn={checkAnswerFunction(true, false)} />
      <h1>{question}</h1>

      {/* Map answers as buttons */}
      <div className="options-gird">
        {answers.map((answer, i) => {
          return (
            <div key={i} className="option-box">
              <Button
                key={i}
                onClick={checkAnswerFunction(answer, correct_answer)}
                optionButton
              >
                {answer}
              </Button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Card;
