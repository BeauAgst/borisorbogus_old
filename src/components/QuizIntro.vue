<template>
  <div class="quiz-intro">
    <div class="quiz-intro--copy">
      <p>Previously stationed as our
      <strong>'Secretary of State for Foreign and Commonwealth Affairs'</strong>
      until his resignation in July 2018,
      <a rel="noopener" target="_blank" href="https://en.wikipedia.org/wiki/Boris_Johnson">Boris Johnson</a>
      has made some pretty outlandish and controversial statements throughout the years.</p>
      <p>Can you guess which of the following quotes can be attributed to Boris?
      And which ones are just flat-out bogus?</p>
    </div>
    <div class="quiz-intro--begin">
      <button
        class="quiz-intro--btn btn"
        @click="startQuiz"
      >
        <span>Let's play!</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizIntro',
  methods: {
    startQuiz() {
      this.$emit('quizStarted');
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.quiz-intro {
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 600px;
  font-size: 1.25rem;

  &--begin {
    text-align: center;
    line-height: 60px;
  }

  &--btn {
    transition: .1s all;

    &:hover {
      padding: 0 30px;
      line-height: 50px;
      letter-spacing: .1em;
      font-size: inherit;
      box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.15);
      transform: rotate(3deg);
    }
  }

}

</style>
