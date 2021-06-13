<template>
  <div class="stars">
    <span :class="['iconfont icon-star', { avtive: starNum >= 1 }]"></span>
    <span :class="['iconfont icon-star', { avtive: starNum >= 2 }]"></span>
    <span :class="['iconfont icon-star', { avtive: starNum >= 3 }]"></span>
    <span :class="['iconfont icon-star', { avtive: starNum >= 4 }]"></span>
    <span :class="['iconfont icon-star', { avtive: starNum >= 5 }]"></span>
  </div>
</template>

<script>
export default {
  name: "Stars",
  components: {},
  props: {
    starNum: Number,
  },
};
</script>

<style lang='scss' scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.stars {
  // @include flex-row;
  color: #ccc;
  .avtive {
    color: $starColor;
  }
}
</style>
