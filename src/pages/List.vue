<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <tab-index></tab-index>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import { mapState } from "vuex";
import fieldData from "data/fields";

import CommonHeader from "components/Header/Common";
import ListScrollWrapper from "components/ScrollWrapper/List";
import TabIndex from "components/Tab/index";

export default {
  name: "List",
  components: { CommonHeader, ListScrollWrapper, TabIndex },
  computed: {
    ...mapState(["field"]),
    title() {
      if (this.field) {
        return (
          fieldData.filter((item) => item.field === this.field)[0].iconText +
          "列表"
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
