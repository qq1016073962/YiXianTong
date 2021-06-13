<template>
  <div class="container">
    <common-header></common-header>
    <search-index @onSearch="onSearch"></search-index>
    <search-scroll-wrapper :searchData="searchData"></search-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from "components/Header/Common";
import SearchIndex from "components/SearchInput/index";
import SearchScrollWrapper from "components/ScrollWrapper/Search";
import tools from "utils/tools";

export default {
  name: "Search",
  components: { CommonHeader, SearchIndex, SearchScrollWrapper },
  data() {
    return {
      title: "商家搜索",
      searchData: {},
    };
  },
  methods: {
    onSearch(res) {
      if (res && res.status === 0) {
        const data = res.data;
        data.foodDatas = tools.formatJSON(data.foodDatas, "keyword");
        this.searchData = data;
        console.log(this.searchData);
      } else {
        this.searchData = res;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
