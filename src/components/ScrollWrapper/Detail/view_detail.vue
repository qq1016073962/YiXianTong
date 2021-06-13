<template>
  <div class="view-detail-index">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <open-date-time :openDateTime="openDateTime"></open-date-time>
    <detail-tip :tip="tip"></detail-tip>
    <detail-intro :intro="intro"></detail-intro>
    <detail-ticket-intro :ticketIntro="ticketIntro"></detail-ticket-intro>
  </div>
</template>

<script>
import DetailName from "./Sub/Name";
import DetailStars from "./Sub/Stars";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import OpenDateTime from "./Sub/openDateTime";
import DetailTip from "./Sub/Tip";
import DetailIntro from "./Sub/Intro";
import DetailTicketIntro from "./Sub/TicketIntro";

export default {
  name: "ViewDetailIndex",
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    OpenDateTime,
    DetailTip,
    DetailIntro,
    DetailTicketIntro,
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openDateTime: String,
    tip: String,
    intro: String,
    ticketIntro: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
