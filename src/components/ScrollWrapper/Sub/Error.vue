<template>
  <div class="error-bd" v-show="errorShow">
    <span class="iconfont icon-error"></span>
    <span class="error-text">网络走丢啦</span>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    errorShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.error-bd {
  @include vh-center;
  flex-direction: column;
  height: 3rem;
  color: #999;
  .iconfont {
    font-size: 0.5rem;
  }
  .error-text {
    font-size: 0.14rem;
    margin-top: 0.1rem;
  }
}
</style>

