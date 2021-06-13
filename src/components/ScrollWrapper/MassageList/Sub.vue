<template>
  <div class="massage-list-sub">
    <router-link
      :to="{ path: 'detail', query: { field: 'massage', id: data.id } }"
    >
      <div class="img">
        <img class="title-img" :src="data.img" :alt="data.name" />
      </div>
      <div class="info-right">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.score)"></stars>
          <span class="score">{{ data.score }}</span>
        </p>
        <p class="others">
          <span class="font-price"
            >￥{{ data.default_price }}
            <span class="fonts">起</span>
          </span>
          <span class="city">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Sub/Stars";
export default {
  name: "MsssageListSub",
  components: { Stars },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.massage-list-sub {
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  a {
    @include flex-row;

    flex-wrap: nowrap;

    .img {
      width: 1.1rem;
      height: 1.1rem;
      .title-img {
        width: 100%;
        height: 100%;
        min-height: 1.1rem;
        min-width: 1.1rem;
      }
    }
    .info-right {
      @include flex-column;
      @include ellipsis;

      flex: 1;
      margin-left: 0.1rem;
      .title {
        @include ellipsis;
        font-size: 0.18rem;
        line-height: 0.2rem;
      }
      .stars {
        @include flex-row;
        font-size: 0.14rem;
        line-height: 0.5rem;
        .score {
          margin-left: 0.1rem;
          color: #000;
        }
      }
      .others {
        @include flex-row;
        justify-content: space-between;
        margin-top: 0.26rem;
        font-size: 0.16rem;

        color: #000;
        .font-price {
          font-size: 0.18rem;
          color: #548621;
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
