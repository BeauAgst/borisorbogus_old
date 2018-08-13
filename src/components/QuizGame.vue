<template>
  <div class="quiz-game">
    <QuizQuestion
      :question="currentQuestion"
      @answeredQuestion="setQuestion"
    />
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
  props: {
    quizQuestions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      questions: [],
      completedQuestions: [],
      currentQuestion: {},
    };
  },
  created() {
    this.questions = this.quizQuestions.slice();
    this.setQuestion();
  },
  methods: {
    getRandomQuestion() {
      const index = Math.floor(Math.random() * this.questions.length);
      return {
        index,
        data: this.questions.splice(index, 1)[0],
      };
    },
    setQuestion() {
      if (!this.questions.length) return;
      const question = this.getRandomQuestion();
      this.completedQuestions.push(question.index);
      this.currentQuestion = question.data;
    },
  },
  computed: {
    questionNumber() {
      return this.completedQuestions.length;
    },
  },
  watch: {
    questionNumber() {
      this.$emit('nextQuestion', this.questionNumber);
    },
  },
};
</script>
