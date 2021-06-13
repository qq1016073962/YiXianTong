<template>
  <div class="view-tiem">
    <router-link
      :to="{ path: 'detail', query: { field: 'view', id: data.id } }"
    >
      <div class="img">
        <img class="biew-img" :src="data.img" :alt="data.name" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <div class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </div>
        <p class="others">
          <span class="item">
            <span class="price"
              >￥{{ data.default_price
              }}<span class="font-color">起</span></span
            >
          </span>
          <span class="price-add">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "components/ScrollWrapper/Sub/Stars";

export default {
  name: "ViewItemSub",
  components: { Stars },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.view-tiem {
  @include flex-column;
  width: 50%;
  padding: 0.1rem;
  box-sizing: border-box;
  .img {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
    .biew-img {
      width: 100%;
      min-height: 1.1rem;
    }
  }
  .info {
    .title {
      @include ellipsis;
      font-size: 0.14rem;
      height: 0.3rem;
      line-height: 0.3rem;
      color: #000;
    }
    .stars {
      @include flex-row;
      height: 0.2rem;
      line-height: 0.2rem;
      font-size: 0.14rem;
    }
    .others {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.3rem;
      line-height: 0.3rem;
      .price {
        font-size: 0.16rem;
        color: $defaultGreen;
        vertical-align: 0.04rem;
        .font-color {
          font-size: 0.12rem;
          color: #000;
          margin-left: 0.03rem;
        }
      }

      .price-add {
        color: #000;
        font-size: 0.13rem;
      }
    }
  }
}
</style>
