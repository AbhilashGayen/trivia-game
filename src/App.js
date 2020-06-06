import React, { Component } from "react";
import Button from "./components/button";

import "./App.css";
import { getQuiz } from "./api/getQuiz";
import Card from "./components/card";
import Score from "./components/score";

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
    const { length } = this.state.quizData;
    return (
      <Card
        key={index}
        checkAnswerFunction={this.checkAnswer}
        question={atob(question)}
        duration={10}
        correct_answer={atob(correct_answer)}
        incorrect_answers={incorrect_answers.map((x) => atob(x))}
        currentQuestion={index}
        totalQuestions={length}
      />
    );
  };

  restartGame = () => {
    console.clear();
    return this.setState({
      quizData: null,
      rightAnswers: 0,
      currentQuestion: 0,
    });
  };

  fetchQuiz = () => {
    getQuiz()
      .then((response) => {
        this.setState({ quizData: response.results });
      })
      .then(() => console.log(this.state.quizData));
  };

  render() {
    const { quizData, currentQuestion, correctAnswerCount } = this.state;
    return (
      <div className="app">
        {!quizData ? (
          <>
            <h1>General Knowledge Quiz</h1>
            <Button onClick={this.fetchQuiz}>Start Quiz</Button>
          </>
        ) : null}

        {quizData && currentQuestion < 10
          ? this.populateQuizCard(quizData[currentQuestion], currentQuestion)
          : ""}
        {quizData && currentQuestion === 10 ? (
          <Score score={correctAnswerCount} refresh={this.restartGame} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
