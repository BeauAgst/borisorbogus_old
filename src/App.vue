<template>
  <div id="app">
    <Header
      :totalQuestions="quizQuestions.length"
      :quizStarted="quizStarted"
    />
    <main class="quiz-content">
      <transition
        mode="out-in"
        name="fade"
      >
        <QuizIntro
          v-if="!quizStarted"
          @quizStarted="startQuiz"
        />
        <QuizGame
          v-else
          :quizQuestions="quizQuestions"
          @nextQuestion="updateQuestionNumber"
        />
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Header from '@/components/Header';
import QuizIntro from '@/components/QuizIntro';
import QuizGame from '@/components/QuizGame';
import Footer from '@/components/Footer';
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
      quizQuestions: [],
    };
  },
  created() {
    this.quizQuestions = quizData.slice(0);
  },
  methods: {
    ...mapMutations(['startQuiz', 'updateQuestionNumber']),
  },
  computed: {
    ...mapState(['quizStarted']),
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
