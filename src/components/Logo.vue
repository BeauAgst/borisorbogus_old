<template>
  <div class="circle">
    <div class="square"></div>
    <div class="square square_backwards"></div>
    <div class="star-container">
      <div class="star"></div>
    </div>
    <div class="star-container">
      <div class="star"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.star-container {
  display: inline-block;
  color: $tertiary--color;
  font-size: 3px;
  animation: rotate 3s infinite linear;
}

.circle {
  position: relative;
  width: 15em;
  height: 15em;
  background: #fff;
  border-radius: 50%;
}

.square {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -33.33%;
  margin-left: -33.33%;
  transform: rotate(0deg);
  width: 66%;
  height: 66%;
  color: $tertiary--color;
  background: currentColor;
  animation: rotate 30s infinite linear;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: currentColor;
    transform: rotate(30deg);
  }

  &:after {
    transform: rotate(60deg);
  }

  &_backwards {
    color: $secondary--color;
    margin-top: -25%;
    margin-left: -25%;
    width: 50%;
    height: 50%;
    animation: none;
  }
}
</style>
