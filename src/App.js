import React, { Component } from "react";
import Button from "./components/Button";

import "./App.css";
import { getQuiz } from "./api/getQuiz";
import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: null,
      correctAnswerCount: 0,
      currentQuestion: 0,
    };

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(answer, correct_answer) {
    return () => {
      console.log(answer === correct_answer);
      if (answer === correct_answer) {
        this.setState(({ correctAnswerCount: previousCount }) => ({
          correctAnswerCount: previousCount + 1,
        }));
      }
      this.setState(({ currentQuestion: previousQuestion }) => ({
        currentQuestion: previousQuestion + 1,
      }));
    };
  }

  populateQuizCard = (record, index) => {
    const { correct_answer, incorrect_answers, question } = record;
    return (
      <Card
        key={index}
        checkAnswerFunction={this.checkAnswer}
        question={question}
        correct_answer={correct_answer}
        incorrect_answers={incorrect_answers}
      />
    );
  };

  fetchQuiz = () => {
    getQuiz()
      .then((response) => {
        this.setState({ quizData: response.results });
      })
      .then(() => console.log(this.state.quizData));
  };

  render() {
    return (
      <div>
        <Button onClick={this.fetchQuiz}>Start Quiz</Button>
        {this.state.quizData
          ? this.populateQuizCard(
              this.state.quizData[this.state.currentQuestion],
              this.state.currentQuestion
            )
          : ""}
      </div>
    );
  }
}

export default App;
