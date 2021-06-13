<template>
  <div class="city-list-sub">
    <span class="city" @click="onCityClick(cityInfo)">{{
      cityInfo.cityName
    }}</span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CityListSub",
  components: {},
  props: {
    cityInfo: {
      type: Object,
    },
  },
  methods: {
    ...mapMutations(["selectCity"]),
    onCityClick(cityInfo) {
      this.selectCity(cityInfo);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";
.city-list-sub {
  @include flex-row;
  align-items: center;
  padding-left: 0.15rem;
  font-size: 0.16rem;
  background-color: #fff;
  height: 0.5rem;
  border-bottom: 1px solid #ddd;
}
</style>
