<template>
  <div class="home-title">
    <p class="title-font">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  components: {},
  props: {
    title: {
      type: String,
      default() {
        return "一线生活通";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";
.home-title {
  @include flex-row;
  align-items: center;
  width: 100%;
  height: 0.5rem;
  margin-top: 0.1rem;
  padding-left: 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  .title-font {
    font-size: 0.15rem;
    font-weight: 500;
    color: #000;
  }
}
</style>
