<template>
  <div class="hotel-list-sub">
    <router-link
      :to="{ path: 'detail', query: { field: 'hotel', id: data.id } }"
    >
      <div class="img">
        <img class="list-img" :src="data.img" :alt="data.name" />
      </div>

      <div class="title-info">
        <h1 class="title">{{ data.name }}</h1>
        <span class="score">{{ data.score }}</span>
        <span class="add">{{ data.area }}</span>
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
export default {
  name: "HotelListSub",
  components: {},
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.hotel-list-sub {
  width: 100%;
  border-bottom: 1px solid #ddd;
  a {
    @include flex-row;
    padding: 0.1rem;
    box-sizing: border-box;
    .img {
      width: 1.1rem;
      height: 1.1rem;
      .list-img {
        width: 100%;
        height: 100%;
        min-width: 1.1rem;
        min-height: 1.1rem;
      }
    }
    .title-info {
      @include flex-column;
      flex-wrap: nowrap;
      @include ellipsis;
      // justify-content: space-between;
      flex: 1;
      margin-left: 0.1rem;
      .title {
        @include ellipsis;
        font-size: 0.18rem;
        color: #000;
        line-height: 0.3rem;
      }
      .score {
        font-size: 0.14rem;
        color: $starColor;
        line-height: 0.14rem;
      }
      .add {
        font-size: 0.14rem;
        color: #666;
        line-height: 0.5rem;
      }
      .others {
        font-size: 0.14rem;
        @include flex-row;
        justify-content: space-between;
        .font-price {
          font-size: 0.18rem;
          color: $defaultGreen;
          .fonts {
            font-size: 0.14rem;
          }
        }
      }
    }
  }
}
</style>
