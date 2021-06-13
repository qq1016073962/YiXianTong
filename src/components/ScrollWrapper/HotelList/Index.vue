<template>
  <div class="hotel-list-index">
    <hotel-list-sub
      v-for="(item, index) of hoteldatas"
      :key="index"
      :data="item"
    ></hotel-list-sub>
  </div>
</template>

<script>
import HotelListSub from "./Sub";
export default {
  name: "HotelListIndex",
  components: { HotelListSub },
  props: {
    hoteldatas: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.hotel-list-index {
  @include flex-column;
  background-color: #fff;
}
</style>
