<template>
  <div class="search-index">
    <div class="search-wrapper">
      <span class="iconfont icon-header-search"></span>
      <input
        type="text"
        class="input"
        :placeholder="placeholder"
        v-model="keyword"
        @input="onSearch"
      />
    </div>
  </div>
</template>

<script>
import { SearchModel } from "models/search";
import { mapState } from "vuex";
import tools from "utils/tools";

export default {
  name: "SearchIndex",
  components: {},
  data() {
    return {
      keyword: "",
      placeholder: "美食 / 景点 / 酒店 / 按摩 / KTV",
    };
  },
  computed: {
    ...mapState(["cityId"]),
  },
  methods: {
    onSearch: tools.throttle(function () {
      const keyword = tools.trimSpace(this.keyword);
      if (keyword.length <= 0) {
        this.$emit("onSearch", {});
        return;
      }
      const searchmodel = new SearchModel();
      searchmodel.searchAction(keyword, this.cityId).then((res) => {
        this.$emit("onSearch", res);
      });
    }, 1000),
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
.search-index {
  height: 0.44rem;
  padding: 0.06rem 0.15rem;
  background-color: #fff;
  box-sizing: border-box;

  .search-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    .iconfont {
      position: absolute;
      top: 0.11rem;
      left: 0.08rem;
      font-size: 0.16rem;
    }
    .input {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 0.03rem;
      font-size: 0.14rem;
      text-indent: 0.32rem;
    }
  }
}
</style>
