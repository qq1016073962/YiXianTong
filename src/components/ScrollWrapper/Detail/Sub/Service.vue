<template>
  <div class="service-bd">
    <detail-title icon="icon-service" title="商家服务"></detail-title>
    <div class="service">
      <p>停车场：{{ serviceData && serviceData.parking ? "有" : "无" }}</p>
      <p>WIFI：{{ serviceData && serviceData.wifi ? "有" : "无" }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title";

export default {
  name: "DetailService",
  components: { DetailTitle },
  props: {
    serviceData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.service-bd {
  @include flex-column;
  margin-top: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .service {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    box-sizing: border-box;
  }
}
</style>
