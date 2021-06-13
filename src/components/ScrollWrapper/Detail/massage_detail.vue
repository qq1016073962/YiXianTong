<template>
  <div class="massage-index">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <open-date-time :openDateTime="openDateTime"></open-date-time>
    <detail-comment-keyword
      :commentKeyword="commentKeyword"
    ></detail-comment-keyword>
    <detail-service :serviceData="serviceData"></detail-service>
  </div>
</template>

<script>
import DetailName from "./Sub/Name";
import DetailStars from "./Sub/Stars";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import OpenDateTime from "./Sub/openDateTime";
import DetailCommentKeyword from "./Sub/CommentKeyword";
import DetailService from "./Sub/Service";

export default {
  name: "MassageDetailIndex",
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    OpenDateTime,
    DetailCommentKeyword,
    DetailService,
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openDateTime: String,
    serviceData: Object,
    commentKeyword: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>
