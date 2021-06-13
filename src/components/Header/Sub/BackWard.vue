<template>
  <div class="back-ward" @click="onRouteBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
export default {
  name: "BackWard",
  components: {},
  methods: {
    onRouteBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";
.back-ward {
  position: absolute;
  left: 0;
  top: 0;
  @include flex-row;
  @include vh-center;
  width: $headerHeight;
  height: $headerHeight;
  .iconfont {
    font-size: 0.2rem;
  }
}
</style>
