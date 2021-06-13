<template>
  <div class="hotel-index">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-service :serviceData="serviceData"></detail-service>
  </div>
</template>

<script>
import DetailName from "./Sub/Name";
import DetailStars from "./Sub/Stars";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import DetailService from "./Sub/Service";

export default {
  name: "HotelDetailIndex",
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailService,
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    serviceData: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>
