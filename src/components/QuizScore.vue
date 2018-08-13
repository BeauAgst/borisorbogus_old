<template>
  <div class="current-score">
    <div class="current-score--correct">{{ current }}</div>
    <div class="current-score--divider"></div>
    <div class="current-score--total">{{ total }}</div>
  </div>
</template>

<script>
export default {
  name: 'QuizScore',
  props: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
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
  background: $secondary--color;
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
