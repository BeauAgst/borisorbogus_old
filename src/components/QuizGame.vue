<template>
  <div class="quiz-game">
    <QuizQuestion/>
  </div>
</template>

<script>
import QuizScore from '@/components/QuizScore';
import QuizQuestion from '@/components/QuizQuestion';

export default {
  name: 'QuizGame',
  components: {
    QuizScore,
    QuizQuestion,
  },
};
</script>


<style lang="scss">
.quiz-game {
  padding: 2em;
}
</style>
