import { QuizActionTypes } from "./quiz.types";

const INITIAL_STATE = {
  quizData: null,
  correctAnswerCount: 0,
  currentQuestion: 0,
};

export const QuizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizActionTypes.SET_QUIZ_QUESTIONS:
      return {
        ...state,
        quizData: action.quizData,
      };
    case QuizActionTypes.UPDATE_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case QuizActionTypes.INCREMENT_CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswerCount: state.correctAnswerCount + 1,
      };
    case QuizActionTypes.RESET_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};
