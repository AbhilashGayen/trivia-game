import React from "react";
import Button from "./Button";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      question,
      correct_answer,
      incorrect_answers,
      checkAnswerFunction,
    } = this.props;
    const answers = correct_answer.split().concat(incorrect_answers);
    return (
      <section>
        <h1>{question}</h1>
        {answers.map((answer, i) => {
          return (
            <Button
              key={i}
              onClick={checkAnswerFunction(answer, correct_answer)}
            >
              {answer}
            </Button>
          );
        })}
      </section>
    );
  }
}

export default Card;
