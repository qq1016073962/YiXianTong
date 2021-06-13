<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <info-detail></info-detail>
  </div>
</template>

<script>
import CommonHeader from "components/Header/Common";
import InfoDetail from "components/ScrollWrapper/Detail";
export default {
  name: "Detail",
  components: { CommonHeader, InfoDetail },
  data() {
    return {
      title: "详细信息",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
