<template>
  <div class="footer">
    <ul class="footer--made-by">
      <li>Made by</li>
      <li
        v-for="(contributor, index) in contributors"
        :key="contributor.name"
      >
        <a
          :href="contributor.url"
          target="_blank"
          >{{ contributorText(contributor.name, index, contributors.length) }}</a>
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
          target="_blank"
          >{{ link.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      contributors: [
        {
          name: 'Beau August',
          url: '//www.beaugust.co.uk/',
        },
      ],
      links: [
        {
          title: 'Vote for Policies',
          url: '//voteforpolicies.org.uk',
        },
        {
          title: 'Print-out Boris mask!',
          url: '',
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
  bottom: 0;
  left: 0;
  width: 100%;

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
