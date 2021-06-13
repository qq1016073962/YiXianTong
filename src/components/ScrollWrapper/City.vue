<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list-index></city-list-index>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CurrentCity from "./CityList/CurrentCity";
import CityListIndex from "./CityList/Index";

export default {
  name: "CityScrollWrapper",
  components: { CurrentCity, CityListIndex },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  },
};
</script>

<style scoped>
</style>
