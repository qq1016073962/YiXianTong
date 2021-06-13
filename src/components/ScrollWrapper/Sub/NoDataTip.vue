<template>
  <div class="no-data-tip">
    <span class="data">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: "NoDataTip",
  components: {},
  data() {
    return {
      content: "-没有搜索到相关结果-",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
.no-data-tip {
  // flex: 1;
  @include vh-center;
  flex-direction: column;
  width: 100%;
  line-height: 3rem;
  // height: 3rem;

  .data {
    font-size: 0.16rem;
    color: #888;
  }
}
</style>
