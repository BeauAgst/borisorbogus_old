<template>
  <div class="quiz-question">
    <div class="quiz-question--title">
      <div>Who had this to say on...</div>
      <div class="quiz-question--title_topic">{{ question.topic }}</div>
    </div>
    <div class="quiz-question--content">
      <div class="quiz-question--quote">
        <p
          v-for="(quote, index) in question.quote"
          :key="index"
        >{{ quote }}</p>
      </div>
      <div class="quiz-question--answers">
        <div
          class="btn"
          @click="answerQuestion(question.boris)"
        >Boris</div>
        <div
          class="btn btn_secondary"
          @click="answerQuestion(!question.boris)"
        >Bogus</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizQuestion',
  props: {
    question: {
      type: Object,
      default: () => ({
        quote: [],
        refs: {},
        topic: '',
        boris: false,
      }),
    },
  },
  methods: {
    answerQuestion(correct) {
      this.$emit('answeredQuestion', correct);
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.quiz-question {
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  border-radius: 7px;
  box-shadow: 0 8px 22px 0 rgba(34, 45, 65, 0.18);
  background: #fff;

  &--title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 30px;
    font-size: 1.2rem;
    background: $secondary--color;

    &_topic {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  &--content {
    color: $secondary--color;
    padding: 30px;
  }

  &--answers {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }
}

</style>
