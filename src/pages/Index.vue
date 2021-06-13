<template>
  <div class="container">
    <home-header></home-header>
    <icon-home></icon-home>
  </div>
</template>

<script>
import HomeHeader from "components/Header/Home";
import IconHome from "components/ScrollWrapper/Home";

export default {
  name: "Index",
  components: {
    HomeHeader,
    IconHome,
  },
};
</script>

<style lang="scss" scoped>
</style>
