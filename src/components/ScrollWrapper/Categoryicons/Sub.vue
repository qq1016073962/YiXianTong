<template>
  <div class="category-icons-sub" @click="onRouterTo(feild)">
    <div class="icon" :style="{ backgroundColor: bgColor }">
      <span class="iconfont" :class="icon"></span>
    </div>
    <p class="icon-text">{{ iconText }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CategoryIconsSub",
  components: {},
  props: {
    bgColor: String,
    icon: String,
    feild: String,
    iconText: {
      type: String,
      default() {
        return "分类";
      },
    },
  },
  methods: {
    ...mapMutations(["selectField"]),
    onRouterTo(feild) {
      this.selectField(feild);
      this.$router.push("/list");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";
.category-icons-sub {
  @include flex-column;
  @include vh-center;
  width: 20%;
  padding: 0.2rem 0;
  .icon {
    @include vh-center;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    .iconfont {
      color: #fff;
      font-size: 0.26rem;
    }
  }
  .icon-text {
    font-size: 0.14rem;
    margin-top: 0.1rem;
    text-align: center;
  }
}
</style>
