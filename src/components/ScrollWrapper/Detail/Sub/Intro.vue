<template>
  <div class="intro-bd">
    <detail-title title="详细信息" icon="icon-intro"></detail-title>
    <div class="intro-comment">{{ intro }}</div>
  </div>
</template>

<script>
import DetailTitle from "./Title";
export default {
  name: "DetailIntro",
  components: { DetailTitle },
  props: {
    intro: {
      type: String,
      default() {
        return "加载中...";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.intro-bd {
  @include flex-column;
  margin-top: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .intro-comment {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    box-sizing: border-box;
    text-indent: 2em;
  }
}
</style>
