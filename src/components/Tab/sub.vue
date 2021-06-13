<template>
  <div
    :class="['tab-item', { current: cityInfo.cityId === cityId }]"
    @click="TabClick(cityInfo)"
  >
    <span>{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TabSub",
  components: {},
  props: {
    cityInfo: Object,
  },
  computed: {
    ...mapState(["cityId"]),
  },
  methods: {
    ...mapMutations(["selectCity"]),
    TabClick(cityInfo) {
      this.selectCity(cityInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";
.tab-item {
  @include vh-center;
  flex: 1;
  font-size: 0.16rem;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid #fff;

  &.current {
    color: $defaultGreen;
    border-color: $defaultGreen;
  }
}
</style>
