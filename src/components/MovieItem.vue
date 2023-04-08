<template>
  <div class="movie-item">
    <router-link
      :to="{
        name: 'Movie Detail',
        params: { id: movie.imdbID },
      }"
      class="movie-link"
    >
      <div class="product-image">
        <img :src="movie.Poster" alt="Movie Poster" />
        <div class="type">{{ movie.Type }}</div>
      </div>
      <div class="detail">
        <p class="year">{{ movie.Year }}</p>
        <h3>{{ movie.Title }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-item {
  max-width: 25%;
  flex: 1 1 25%;
  padding: 16px 8px;
  @media screen and(max-width:991px) {
    max-width: 33.33%;
    flex: 1 1 33.33%;
  }
  @media screen and(max-width:768px) {
    max-width: 50%;
    flex: 1 1 50%;
  }
  @media screen and(max-width:576px) {
    max-width: 100%;
    flex: 1 1 100%;
  }
  .movie-link {
    overflow: hidden;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    height: 100%;
    .product-image {
      position: relative;
      display: block;
      img {
        display: block;
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
      .type {
        position: absolute;
        padding: 8px 16px;
        background-color: #42b883;
        color: #fff;
        bottom: 16px;
        left: 0px;
        text-transform: capitalize;
      }
    }
    .detail {
      background-color: #496583;
      padding: 16px 8px;
      flex: 1 1 100%;
      .year {
        color: #aaa;
        font-size: 14px;
      }
      h3 {
        color: #fff;
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}
</style>
