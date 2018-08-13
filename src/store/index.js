import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultState = {
  quizStarted: false,
  questions: [],
  currentQuestion: 1,
};

const mutations = {
  startQuiz(state) {
    state.quizStarted = true;
  },
  updateQuestionNumber(state, val) {
    state.currentQuestion = val;
  },
};
const getters = {};
const actions = {};

export default new Vuex.Store({
  state: defaultState,
  getters,
  actions,
  mutations,
});
