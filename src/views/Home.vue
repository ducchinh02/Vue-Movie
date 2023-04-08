<template>
  <div class="home">
    <div v-if="movies.length > 0" class="feature-card">
      <router-link
        :to="{
          name: 'Movie Detail',
          params: { id: movies[1].imdbID },
        }"
      >
        <img :src="movies[1].Poster" alt="Poster" class="featured-img" />
        <div class="detail">
          <h3>
            {{ movies[1].Title }}
            <span class="tag">Hot</span>
          </h3>
          <p>
            {{ movies[1].Plot }}
          </p>
        </div>
      </router-link>
    </div>
    <div v-else class="feature-card">
      <router-link :to="{ name: 'Movie Detail', params: { id: 'tt4574334' } }">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
          alt="Poster"
          class="featured-img"
        />
        <div class="detail">
          <h3>
            Stranger Things
            <span class="tag">Hot</span>
          </h3>
          <p>
            When a young boy disappears, his mother, a police chief and his
            friends must confront terrifying supernatural forces in order to get
            him back.
          </p>
        </div>
      </router-link>
    </div>
    <!-- search results -->
    <div v-if="movies.length > 0">
      <h3 class="text-result">
        We found <span> {{ movies.length }} </span> movies for you.
      </h3>
      <div class="search-result">
        <movie-item
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "../components/MovieItem.vue";
// @ is an alias to /src

export default {
  name: "Home",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  components: { MovieItem },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  .feature-card {
    height: 100vh;
    width: 100%;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      display: block;

      @media screen and (max-width: 768px) {
        object-fit: cover;
      }
    }
    .detail {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 16px 20px;
      background-color: rgba($color: #000000, $alpha: 0.5);
      h3 {
        font-size: 28px;
        margin: 20px 0;
        font-weight: 600;
      }
    }
    .tag {
      border-radius: 10px;
      padding: 10px 20px;
      font-weight: 600;
      font-size: 20px;
      background-color: #fe4c50;
      color: #fff;
      margin-left: 10px;
    }
  }
}
.search-result {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
}
.text-result {
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  padding: 20px 15px 15px;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  span {
    font-weight: 600;
  }
}
</style>
