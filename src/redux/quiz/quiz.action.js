export const setQuizQuestions = (data) => {
  return {
    type: "SET_QUIZ_QUESTIONS",
    quizData: data,
  };
};

export const incrementCorrectAnswers = () => {
  return {
    type: "INCREMENT_CORRECT_ANSWERS",
  };
};

export const updateCurrentQuestion = currentQuestion => {
  return {
    type: 'UPDATE_CURRENT_QUESTION',
    currentQuestion : 1
  };
};

export const resetGame = () => {
  return {
    type: "RESET_GAME",
  };
};
