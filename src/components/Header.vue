<template>
  <header class="header">
    <div class="header--logo">
      <div class="header--logo_image"></div>
      <div class="header--logo_text">
        <div>Boris or</div>
        <div class="header--logo_alt">Bogus</div>
      </div>
    </div>
    <transition name="fade">
      <QuizScore
        v-if="quizStarted"
        :current="currentQuestion"
        :total="totalQuestions"
      />
    </transition>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import QuizScore from '@/components/QuizScore';

export default {
  name: 'Header',
  components: {
    QuizScore,
  },
  props: {
    quizStarted: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState(['questions', 'currentQuestion']),
    totalQuestions() {
      return this.questions.length;
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 100px;
  background: #fff;
  box-shadow: 0 8px 22px 0 rgba(34, 45, 65, 0.18);
  font-size: 1.5rem;

  &--logo {
    user-select: none;
    display: flex;
    align-items: center;
    color: $primary--color_accessible;
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
      color: $secondary--color;
      font-size: 1.5em;
    }
  }
}
</style>
