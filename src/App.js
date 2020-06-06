import React, { Component } from "react";
import Button from "./components/button";
import { getQuiz } from "./api/getQuiz";
import Card from "./components/card";
import Score from "./components/score";

class App extends Component {
  constructor(props) {
    super(props);

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  // Function to check correct answers
  checkAnswer(answer, correct_answer) {
    const {
      incrementCorrectAnswers,
      updateCurrentQuestion,
      currentQuestion,
    } = this.props;
    return () => {
      console.log(answer + ":" + (answer === correct_answer)); // consoling the submitted answer with ture or false
      if (answer === correct_answer) {
        incrementCorrectAnswers(); // incrementing if answer is correct
      }
      // incrementing current question index
      updateCurrentQuestion(currentQuestion);
    };
  }

  // Populating Quiz Card one by one
  populateQuizCard = (record, index) => {
    const { correct_answer, incorrect_answers, question } = record;
    const { length } = this.props.quizData;
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

  // Removes sate data to start quiz again
  restartGame = () => {
    console.clear();
    const { resetGame } = this.props;
    resetGame();
  };

  // Fetch Quiz data
  fetchQuiz = () => {
    const { setQuizData } = this.props;
    getQuiz().then((quizData) => setQuizData(quizData.results));
  };

  render() {
    const { quizData ,currentQuestion, correctAnswerCount } = this.props;

    return (
      <div className="app">
        {!quizData ? (
          <div className="card margin-top">
            <h1>General Knowledge Quiz</h1>
            <h3>Total Questions : 10 | Time per Question : 10sec</h3>
            <Button onClick={this.fetchQuiz}>Start Quiz</Button>
          </div>
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
