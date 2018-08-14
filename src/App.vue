<template>
  <div id="app">
    <Header/>
    <main class="quiz-content">
      <transition
        mode="out-in"
        name="fade"
      >
        <QuizIntro v-if="!quizStarted"/>
        <QuizGame v-else-if="quizStarted && !quizEnded"/>
        <QuizOutro v-else/>
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/Header';
import QuizIntro from '@/components/QuizIntro';
import QuizGame from '@/components/QuizGame';
import QuizOutro from '@/components/QuizOutro';
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    QuizIntro,
    QuizGame,
    QuizOutro,
  },
  created() {
    this.$store.dispatch('getQuestions');
  },
  computed: {
    ...mapState(['quizStarted', 'quizEnded']),
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
