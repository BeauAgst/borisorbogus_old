import Vue from 'vue';
import Vuex from 'vuex';
import quizData from '@/../public/questions.json';

Vue.use(Vuex);

const getDefaultState = () => ({
  quizStarted: false,
  quizEnded: false,
  questions: [],
  usedQuestions: [],
  currentQuestion: {},
  currentQuestionNumber: 1,
  totalQuestions: 1,
  questionState: {
    answered: false,
    correct: false,
  },
  score: 0,
});

const defaultState = getDefaultState();

const getNewQuestion = (state) => {
  const index = Math.floor(Math.random() * state.questions.length);
  const question = state.questions.splice(index, 1)[0];
  state.currentQuestion = question;
  state.usedQuestions.push(question);
  return question[0];
};

const actions = {
  getQuestions({ state }) {
    // axios request to grab json
    state.questions = quizData;
    state.totalQuestions = state.questions.length;
  },
};

const mutations = {
  startQuiz(state) {
    state.quizStarted = true;
    getNewQuestion(state);
  },
  endQuiz(state) {
    state.quizEnded = true;
  },
  answerQuestion(state, correct) {
    state.questionState = {
      answered: true,
      correct,
    };
    if (correct) state.score += 1;
  },
  completeQuestion(state) {
    if (state.currentQuestionNumber === state.totalQuestions) {
      state.quizEnded = true;
      return;
    }
    state.currentQuestionNumber += 1;
    state.questionState.answered = false;
    getNewQuestion(state);
  },
  resetState(state) {
    const { questions, usedQuestions, totalQuestions } = state;
    Object.assign(state, getDefaultState());
    state.questions = [...questions, ...usedQuestions];
    state.totalQuestions = totalQuestions;
  },
};

const getters = {};

export default new Vuex.Store({
  state: defaultState,
  getters,
  actions,
  mutations,
});
