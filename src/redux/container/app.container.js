import App from "../../App";
import { connect } from "react-redux";
import {
  setQuizQuestions,
  resetGame,
  incrementCorrectAnswers,
  updateCurrentQuestion,
} from "../quiz/quiz.action";

const mapStateToProps = (state) => {
  return {
    quizData: state.quizData,
    currentQuestion: state.currentQuestion,
    correctAnswerCount: state.correctAnswerCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuizData: (quizData) => dispatch(setQuizQuestions(quizData)),
    incrementCorrectAnswers: () => dispatch(incrementCorrectAnswers()),
    updateCurrentQuestion: (currentQuestion) =>
      dispatch(updateCurrentQuestion(currentQuestion)),
    resetGame: () => dispatch(resetGame()),
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
