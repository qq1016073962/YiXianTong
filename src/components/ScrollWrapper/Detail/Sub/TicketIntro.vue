<template>
  <div class="ticket-intro-bd">
    <detail-title title="购票信息" icon="icon-intro"></detail-title>
    <div class="ticket-intro-comment">{{ ticketIntro }}</div>
  </div>
</template>

<script>
import DetailTitle from "./Title";
export default {
  name: "DetailTicketIntro",
  components: { DetailTitle },
  props: {
    ticketIntro: {
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

.ticket-intro-bd {
  @include flex-column;
  margin-top: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .ticket-intro-comment {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    box-sizing: border-box;
    text-indent: 2em;
  }
}
</style>
