<template>
  <div class="loading" v-show="loadingShow">
    <img class="loading-img" src="~@/assets/images/loading.gif" />
  </div>
</template>

<script>
export default {
  name: "Loading",
  components: {},
  props: {
    loadingShow: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
.loading {
  @include vh-center;
  height: 3rem;
  .loading-img {
    width: 0.8rem;
    height: 0.8rem;
  }
}
</style>
