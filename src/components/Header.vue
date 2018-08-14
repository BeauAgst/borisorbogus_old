<template>
  <header class="header">
    <div class="header--inner">
      <div class="header--logo">
        <div class="header--logo_image"></div>
        <div class="header--logo_text">
          <div>Boris or</div>
          <div class="header--logo_alt">Bogus</div>
        </div>
      </div>
      <transition name="fade">
        <div
          v-if="quizStarted"
          class="quiz--controls"
        >
          <div class="quiz--controls_buttons">
            <button
              class="btn"
              @click="resetState"
            >Restart</button>
            <button
              class="btn btn_secondary"
              @click="endQuiz"
            >End Quiz</button>
          </div>
          <QuizScore/>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import QuizScore from '@/components/QuizScore';

export default {
  name: 'Header',
  components: {
    QuizScore,
  },
  computed: {
    ...mapState(['quizStarted', 'questions', 'currentQuestionNumber']),
  },
  methods: {
    ...mapMutations(['resetState', 'endQuiz']),
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.header {
  padding: 0 2rem;
  background: #fff;
  box-shadow: 0 8px 22px 0 rgba(34, 45, 65, 0.18);
  font-size: 1.5rem;

  &--inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin: 0 auto;
    max-width: 1680px;
  }

  &--logo {
    user-select: none;
    display: flex;
    align-items: center;
    color: $color--primary_accessible;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -.01em;

    &_image {
      margin-right: 10px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: currentColor;
    }

    &_alt {
      color: $color--secondary;
      font-size: 1.5em;
    }
  }
}

.quiz--controls {
  display: flex;

  &_buttons {
    margin-right: 1em;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    font-size: 12px;
  }

  .btn {
    line-height: calc((70px / 2) - (1em / 2));

    + .btn {
      margin: 1em 0 0;
    }
  }
}
</style>
