<template>
  <div class="quiz-complete">
    <div class="quiz-complete--score">{{ score }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'QuizOutro',
  computed: {
    ...mapState(['score']),
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.quiz-complete {

  &--score {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 8em;
    background: $color--secondary;
    height: 2em;
    width: 2em;
    border-radius: 50%;
    border: .2em solid #fff;
  }
}
</style>
