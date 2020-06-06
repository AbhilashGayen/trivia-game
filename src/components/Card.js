import React from "react";
import Button from "./button";
import Timer from "./timer";
import { motion } from "framer-motion";

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
  const answers = [correct_answer].concat(incorrect_answers).sort(); //TODO: Implement array shuffle, but settling for sort now
  return (
    <motion.div className="card">
      <p>
        {currentQuestion + 1}/{totalQuestions}
      </p>

      <Timer duration={duration} timeoutFn={checkAnswerFunction(true, false)} />

      <h1>{question}</h1>
      <div className="options-gird">
        {answers.map((answer, i) => {
          return (
            <div className="option-box">
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
