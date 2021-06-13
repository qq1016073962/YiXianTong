<template>
  <div class="ktv-sub">
    <router-link :to="{ path: 'detail', query: { id: data.id, field: 'ktv' } }">
      <div class="img">
        <img class="ktv-img" :src="data.img" :alt="data.name" />
      </div>
      <div class="info-right">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.score)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="others">
          <span class="font-price"
            >￥{{ data.default_price }}
            <span class="fonts">起</span>
          </span>

          <span class="price-add">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Sub/Stars";
export default {
  name: "KtvListSub",
  components: { Stars },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.ktv-sub {
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  a {
    @include flex-row;
    flex: 1;
    .img {
      height: 1.1rem;
      width: 1.1rem;
      margin-right: 0.1rem;
      .ktv-img {
        height: 100%;
        width: 100%;
        min-height: 1.1rem;
        min-width: 1.1rem;
      }
    }
    .info-right {
      @include flex-column;
      width: 100%;
      .title {
        font-size: 0.18rem;
        color: #000;
        line-height: 0.2rem;
      }
      .stars {
        @include flex-row;
        font-size: 0.14rem;
        line-height: 0.6rem;
        .score {
          color: $starColor;
          margin-left: 0.08rem;
        }
      }
      .others {
        @include flex-row;
        justify-content: space-between;
        margin-top: 0.12rem;
        font-size: 0.16rem;
        color: #000;
        .font-price {
          font-size: 0.18rem;
          color: $defaultGreen;
          .fonts {
            font-size: 0.14rem;
            color: #000;
          }
        }
      }
    }
  }
}
</style>
