<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <icon-index></icon-index>
      <div v-if="!errorShow">
        <home-title :title="homeTitle.viewTitle"> </home-title>
        <view-list-index :viewDatas="homeDatas.viewDatas"></view-list-index>
        <home-title :title="homeTitle.foodTitle"> </home-title>
        <food-list-index :foodlist="homeDatas.foodDatas"></food-list-index>
        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list-index :hoteldatas="homeDatas.hotelDatas"></hotel-list-index>
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list-index :ktvDatas="homeDatas.ktvDatas"></ktv-list-index>
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list-index
          :massageDatas="homeDatas.massageDatas"
        ></massage-list-index>
      </div>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { IndexModel } from "models/index";
import { mapState } from "vuex";

import IconIndex from "components/ScrollWrapper/Categoryicons/Index";
import HomeTitle from "./Sub/HomeTitle";
import ViewListIndex from "./viewList/Index";
import FoodListIndex from "./FoodList/Index";
import HotelListIndex from "./HotelList/Index";
import MassageListIndex from "./MassageList/Index";
import KtvListIndex from "./KTVList/Index";
import Error from "./Sub/Error";

import tools from "utils/tools";

export default {
  name: "IconHome",
  components: {
    IconIndex,
    HomeTitle,
    ViewListIndex,
    FoodListIndex,
    HotelListIndex,
    MassageListIndex,
    KtvListIndex,
    Error,
  },
  data() {
    return {
      currentID: 0,
      errorShow: false,
      homeTitle: {
        foodTitle: "推荐美食",
        ktvTitle: "推荐KTV",
        massageTitle: "推荐按摩",
        hotelTitle: "推荐酒店",
        viewTitle: "推荐景点",
      },
      homeDatas: {
        foodDatas: [],
        hotelDatas: [],
        ktvDatas: [],
        massageDatas: [],
        viewDatas: [],
      },
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.currentID = this.cityId;
    this.getHomeDatas(this.cityId);
  },
  activated() {
    if (this.currentID !== this.cityId) {
      this.currentID = this.cityId;
      this.getHomeDatas(this.currentID);
    }
  },
  computed: {
    ...mapState(["cityId"]),
  },
  methods: {
    getHomeDatas(cityId) {
      const indexModel = new IndexModel();

      indexModel.getHomeDatas(cityId).then((res) => {
        if (res && res.status === 0) {
          const data = res.data;
          this.errorShow = false;
          this.homeDatas.foodDatas = tools.formatJSON(
            data.foodDatas,
            "keyword"
          );

          this.homeDatas.hotelDatas = data.hotelDatas;
          this.homeDatas.ktvDatas = data.ktvDatas;
          this.homeDatas.massageDatas = data.massageDatas;
          this.homeDatas.viewDatas = data.viewDatas;
        } else {
          this.errorShow = true;
          // console.log({
          //   statusCode: res.status,
          //   errorMsg: res.error,
          // });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
