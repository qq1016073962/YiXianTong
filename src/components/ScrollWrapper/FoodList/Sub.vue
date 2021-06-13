<template>
  <div class="food-list-sub">
    <router-link
      :to="{ path: 'detail', query: { field: 'food', id: data.id } }"
    >
      <div class="img">
        <img class="item-img" :src="data.img" :alt="data.name" />
      </div>
      <div class="item-info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="price">￥{{ data.default_price }}/人</span>
        </p>
        <p class="keyword">
          <span v-for="(item, index) of data.keyword" :key="index">{{
            item
          }}</span>
        </p>
        <p class="others">
          <span class="others-item">{{ data.field }}</span>
          <span class="others-item">{{ data.area }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "components/ScrollWrapper/Sub/Stars";
export default {
  name: "FoodListSub",
  components: { Stars },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.food-list-sub {
  width: 100%;
  a {
    @include flex-row;
    width: 100%;
    padding: 0.1rem;
    box-sizing: border-box;

    background-color: #fff;
    .img {
      width: 1.1rem;
      height: 1.1rem;

      .item-img {
        width: 100%;
        height: 100%;
        min-height: 1.1rem;
        min-width: 1.1rem;
      }
    }
    .item-info {
      @include flex-column;
      justify-content: space-between;
      flex: 1;
      width: 100%;
      @include ellipsis;
      overflow: hidden;
      margin-left: 0.1rem;

      .title {
        font-size: 0.18rem;
        color: #000;
        line-height: 0.2rem;
      }
      .stars {
        @include flex-row;
        .price {
          font-size: 0.14rem;
        }
      }
      .keyword {
        font-size: 0.14rem;
        // margin-right: 0.1rem;
        height: 0.14rem;
        color: $starColor;
        overflow: hidden;
        span {
          margin-right: 0.1rem;
        }
      }
      .others {
        font-size: 0.14rem;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
