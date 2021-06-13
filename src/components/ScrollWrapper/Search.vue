<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="this.searchData.status !== -1">
        <no-data-tip
          v-show="
            (!searchData.viewDatas || searchData.viewDatas.length <= 0) &&
            (!searchData.foodDatas || searchData.foodDatas.length <= 0) &&
            (!searchData.hotelDatas || searchData.hotelDatas.length <= 0) &&
            (!searchData.ktvDatas || searchData.ktvDatas.length <= 0) &&
            (!searchData.massageDatas || searchData.massageDatas.length <= 0)
          "
        ></no-data-tip>

        <div v-if="searchData.viewDatas && searchData.viewDatas.length > 0">
          <home-title title="景点结果："></home-title>
          <view-list-index :viewDatas="searchData.viewDatas"></view-list-index>
        </div>

        <div v-if="searchData.foodDatas && searchData.foodDatas.length > 0">
          <home-title title="美食结果："></home-title>
          <food-list-index :foodlist="searchData.foodDatas"></food-list-index>
        </div>

        <div v-if="searchData.hotelDatas && searchData.hotelDatas.length > 0">
          <home-title title="酒店结果："></home-title>
          <hotel-list-index
            :hoteldatas="searchData.hotelDatas"
          ></hotel-list-index>
        </div>

        <div v-if="searchData.ktvDatas && searchData.ktvDatas.length > 0">
          <home-title title="KTV结果："></home-title>
          <ktv-list-index :ktvDatas="searchData.ktvDatas"></ktv-list-index>
        </div>

        <div
          v-if="searchData.massageDatas && searchData.massageDatas.length > 0"
        >
          <home-title title="按摩结果："></home-title>
          <massage-list-index
            :massageDatas="searchData.massageDatas"
          ></massage-list-index>
        </div>
      </div>

      <error :errorShow="this.searchData.status === -1"></error>
    </div>
  </div>
</template>

<script>
import Betterscroll from "better-scroll";

import HomeTitle from "./Sub/HomeTitle";
import ViewListIndex from "./viewList/Index";
import FoodListIndex from "./FoodList/Index";
import HotelListIndex from "./HotelList/Index";
import MassageListIndex from "./MassageList/Index";
import KtvListIndex from "./KTVList/Index";
import NoDataTip from "./Sub/NoDataTip";
import Error from "./Sub/Error";

export default {
  name: "SearchScrollWrapper",
  components: {
    HomeTitle,
    ViewListIndex,
    FoodListIndex,
    HotelListIndex,
    MassageListIndex,
    KtvListIndex,
    NoDataTip,
    Error,
  },
  mounted() {
    this.scroll = new Betterscroll(this.$refs.wrapper);
  },
  props: {
    searchData: Object,
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
</style>
