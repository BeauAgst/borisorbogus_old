<template>
  <footer class="footer">
    <ul class="footer--made-by">
      <li>Made by &nbsp;</li>
      <li>
        <a
          href="//www.beaugust.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >Beau August</a>
      </li>
      <li>&nbsp;and&nbsp;</li>
      <li>
        <a
          href="//www.beaugust.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >Your Name Could Be Here!</a>
      </li>
    </ul>

    <ul class="footer--links">
      <li
        v-for="(link, index) in links"
        :key="link.title"
      >
        <div
          class="footer--divider"
          v-if="index !== 0"
        >|</div>
        <a
          :href="link.url"
          rel="noopener noreferrer"
          target="_blank"
          >{{ link.title }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      contributors: [
        {
          name: 'Beau August',
          url: '',
        },
        {
          name: 'Your Name Could Be Here!',
          url: '',
        },
      ],
      links: [
        {
          title: 'Vote for Policies',
          url: '//voteforpolicies.org.uk',
        },
        {
          title: 'Print-out Boris mask!',
          url: '/mask.pdf',
        },
      ],
    };
  },
  methods: {
    contributorText(value, index, arrLength) {
      if (arrLength > 1 && index < arrLength - 2) return `${value}, `;
      if (index === arrLength - 2) return `${value} and`;
      return value;
    },
  },
};
</script>

<style lang="scss">
.footer {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  font-size: 0.8rem;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &--divider {
    display: inline-block;
    padding: 0 3px;
  }
}
</style>
