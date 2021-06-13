<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <view-list-index
          v-if="field === 'view'"
          :viewDatas="listData[cityId]"
        ></view-list-index>

        <food-list-index
          v-if="field === 'food'"
          :foodlist="listData[cityId]"
        ></food-list-index>

        <massage-list-index
          v-if="field === 'massage'"
          :massageDatas="listData[cityId]"
        ></massage-list-index>

        <ktv-list-index
          v-if="field === 'ktv'"
          :ktvDatas="listData[cityId]"
        ></ktv-list-index>

        <hotel-list-index
          v-if="field === 'hotel'"
          :hoteldatas="listData[cityId]"
        ></hotel-list-index>
      </div>
      <error :errorShow="errorShow"></error>
      <loading :loadingShow="loadingShow"></loading>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { ListModel } from "models/list";
import { mapState } from "vuex";

import ViewListIndex from "./viewList/Index";
import FoodListIndex from "./FoodList/Index";
import HotelListIndex from "./HotelList/Index";
import MassageListIndex from "./MassageList/Index";
import KtvListIndex from "./KTVList/Index";
import Loading from "./Sub/Loading";
import Error from "./Sub/Error";

import tools from "utils/tools";

export default {
  name: "ListScrollWrapper",
  components: {
    ViewListIndex,
    FoodListIndex,
    HotelListIndex,
    MassageListIndex,
    KtvListIndex,
    Loading,
    Error,
  },
  data() {
    return {
      errorShow: false,
      loadingShow: true,
      listData: {},
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.getListData(this.field, this.cityId);
  },
  computed: {
    ...mapState(["field", "cityId"]),
  },
  methods: {
    getListData(field, cityId) {
      const listModel = new ListModel();
      if (!this.listData[cityId]) {
        console.log(1);
        this.loadingShow = true;
        listModel.getListData(field, cityId).then((res) => {
          if (res && res.status === 0) {
            const data = tools.formatJSON(res.data, "keyword");
            this.errorShow = false;
            setTimeout(() => {
              this.listData[cityId] = data;
              this.loadingShow = false;
            }, 300);
          } else {
            this.errorShow = true;
            this.loadingShow = false;
          }
        });
      } else {
        console.log(2);
      }
    },
  },
  watch: {
    cityId() {
      this.getListData(this.field, this.cityId);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
