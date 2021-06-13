<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!this.errorShow">
        <detail-swiper :picDatas="detailData.pics"></detail-swiper>
        <food-detail-index
          v-if="field == 'food'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="String(detailData.score)"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :recom="detailData.recom"
          :commentKeyword="detailData.comment_keyword"
        ></food-detail-index>

        <view-detail-index
          v-if="field == 'view'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="String(detailData.score)"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :tip="detailData.tip"
          :intro="detailData.intro"
          :ticketIntro="detailData.ticket_info"
        ></view-detail-index>

        <hotel-detail-index
          v-if="field == 'hotel'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="String(detailData.score)"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :serviceData="detailData.service"
        >
        </hotel-detail-index>

        <massage-detail-index
          v-if="field == 'massage'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="String(detailData.score)"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :commentKeyword="detailData.comment_keyword"
          :serviceData="detailData.service"
        ></massage-detail-index>

        <ktv-detail-index
          v-if="field == 'ktv'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="String(detailData.score)"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :serviceData="detailData.service"
        ></ktv-detail-index>
      </div>

      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import { DetailModel } from "models/detail";
import BetterScroll from "better-scroll";
import tools from "utils/tools";
import DetailSwiper from "./Sub/Swiper";
import FoodDetailIndex from "./Detail/food_detail";
import ViewDetailIndex from "./Detail/view_detail";
import HotelDetailIndex from "./Detail/hotel_detail";
import MassageDetailIndex from "./Detail/massage_detail";
import KtvDetailIndex from "./Detail/ktv_detail";
import Error from "./Sub/Error";

export default {
  name: "InfoDetail",
  components: {
    DetailSwiper,
    FoodDetailIndex,
    ViewDetailIndex,
    HotelDetailIndex,
    MassageDetailIndex,
    KtvDetailIndex,
    Error,
  },
  data() {
    return {
      detailData: {},
      field: "",
      errorShow: false,
      id: 0,
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    this.getDetailDatas(this.field, this.id);
  },
  activated() {
    console.log(1111);
    this.currentField = this.$route.query.field;
    this.currentId = this.$route.query.id;
    if (this.currentField !== this.field || this.currentId !== this.id) {
      this.field = this.currentField;
      this.id = this.currentId;
      this.getDetailDatas(this.field, this.id);
    }
  },

  methods: {
    getDetailDatas(field, id) {
      const detailModel = new DetailModel();

      detailModel.getDetail(field, id).then((res) => {
        if (res && res.status === 0) {
          const data = res.data;
          this.errorShow = false;
          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.comment_keyword &&
            (data.comment_keyword = tools.strToArr(data.comment_keyword));
          data.recom && (data.recom = tools.replaceToSpace(data.recom));
          data.service && (data.service = tools.jsonToArr(data.service));

          this.detailData = data;
          // console.log(this.detailData);
        } else {
          this.errorShow = true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
