<template>
  <div id="app">
    <Header
      :currentQuestion="currentQuestionNumber"
      :totalQuestions="quizQuestions.length"
      :quizStarted="quizStarted"
    />
    <div class="quiz-content">
      <transition
        mode="out-in"
        name="fade"
      >
        <QuizIntro
          v-if="!quizStarted"
          @quizStarted="quizStarted = true"
        />
        <QuizGame
          v-else
          :quizQuestions="quizQuestions"
          @nextQuestion="updateQuestionNumber"
        />
      </transition>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import QuizIntro from '@/components/QuizIntro.vue';
import QuizGame from '@/components/QuizGame.vue';
import Footer from '@/components/Footer.vue';
import quizData from '@/assets/data';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    QuizIntro,
    QuizGame,
  },
  data() {
    return {
      quizStarted: false,
      quizQuestions: [],
      currentQuestionNumber: 1,
    };
  },
  created() {
    this.quizQuestions = quizData.slice(0);
  },
  methods: {
    updateQuestionNumber(val) {
      this.currentQuestionNumber = val;
    },
  },
};
</script>

<style lang="scss">
@import 'scss/styles.scss';

.quiz-content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  bottom: 50px;
  left: 0;
  width: 100%;
}
</style>
