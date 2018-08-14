<template>
  <div class="quiz-question">
    <div class="quiz-question--title">
      <div>Who had this to say on...</div>
      <div class="quiz-question--title_topic">{{ currentQuestion.topic }}</div>
    </div>
    <div
      class="quiz-question--content"
      ref="content"
    >
      <div class="quiz-question--quote">
        <p
          v-for="(quote, index) in currentQuestion.quote"
          :key="index"
        >{{ quote }}</p>
      </div>
      <transition name="fade">
        <div
          class="quiz-question--answers"
          v-if="!questionState.answered"
        >
          <button
            class="btn"
            @click="answerQuestion(currentQuestion.boris)"
          >Boris</button>
          <button
            class="btn btn_secondary"
            @click="answerQuestion(!currentQuestion.boris)"
          >Bogus</button>
        </div>
        <div
          class="quiz-question--details"
          v-else
        >
          <div
            class="quiz-question--result"
            :class="{ correct: questionState.correct }"
          >{{ questionState.correct ? 'Correct!' : 'Wrong!' }}</div>
          <div class="quiz-question--information">{{ currentQuestion.more }}</div>
          <div class="quiz-question--sources">
            Sources:
            <a
              v-for="(value, key) in currentQuestion.refs"
              :key="key"
              :href="value"
              target="_blank"
              rel="noopener noreferrer"
            >{{ key }}</a>
          </div>
          <div class="quiz-question--continue">
            <button
              class="btn"
              @click="completeQuestion"
            >Continue</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import smoothHeight from 'vue-smooth-height';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'QuizQuestion',
  mixins: [smoothHeight],
  mounted() {
    this.$smoothElement({
      el: this.$refs.content,
    });
  },
  methods: {
    ...mapMutations(['answerQuestion', 'completeQuestion']),
  },
  computed: {
    ...mapState(['currentQuestion', 'questionState']),
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
    background: $color--secondary;

    &_topic {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  &--content {
    color: $color--secondary;
    padding: 30px;
  }

  &--answers {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }

  &--result {
    border-top: 1px solid #e7e7e7;
    margin-top: 20px;
    padding-top: 20px;
    color: $color--warning;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2em;

    &.correct {
      color: $color--success;
    }
  }

  &--information {
    margin-top: 10px;
  }

  &--sources {
    margin-top: 10px;
    font-size: .8em;
  }

  &--continue {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }
}
</style>
