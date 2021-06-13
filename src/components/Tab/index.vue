<template>
  <div class="tab-index">
    <tab-sub
      v-for="(item, index) of cityDatas"
      :key="index"
      :cityInfo="item"
    ></tab-sub>
  </div>
</template>

<script>
import cityDatas from "data/cities";
import TabSub from "./sub";

export default {
  name: "TabIndex",
  components: { TabSub },
  data() {
    return {
      cityDatas,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
.tab-index {
  @include flex-row;
  flex-wrap: nowrap;
  background-color: #fff;
  line-height: 0.44rem;
  border-bottom: 1px solid #ddd;
}
</style>
