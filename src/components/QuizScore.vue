<template>
  <div class="current-score">
    <div class="current-score--correct">{{ currentQuestionNumber }}</div>
    <div class="current-score--divider"></div>
    <div class="current-score--total">{{ totalQuestions }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'QuizScore',
  computed: {
    ...mapState(['currentQuestionNumber', 'totalQuestions']),
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

$scoreboard--width: 70px;

.current-score {
  position: relative;
  width: $scoreboard--width;
  height: $scoreboard--width;
  background: $color--secondary;
  font-weight: bold;
  border-radius: 7px;

  &--correct,
  &--total {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1em;
    font-size: 20px;
  }

  &--correct {
    top: 10px;
    left: 10px;
  }

  &--total {
    right: 10px;
    bottom: 10px;
  }

  &--divider {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    width: 3px;
    height: $scoreboard--width / 3;
    background: currentColor;
  }
}
</style>
