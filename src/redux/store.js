import { createStore } from 'redux';
import { QuizReducer } from '../redux/quiz/quiz.reducer';

export const store = createStore(QuizReducer);