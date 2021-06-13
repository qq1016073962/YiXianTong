<template>
  <div class="massage-list">
    <msssage-list-sub
      v-for="(item, index) of massageDatas"
      :key="index"
      :data="item"
    ></msssage-list-sub>
  </div>
</template>

<script>
import MsssageListSub from "./Sub";
export default {
  name: "MassageListIndex",
  components: { MsssageListSub },
  props: {
    massageDatas: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.massage-list {
  @include flex-column;
  background-color: #fff;
}
</style>
