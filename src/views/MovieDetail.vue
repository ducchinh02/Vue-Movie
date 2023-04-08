<template>
  <div class="movie-detail" v-if="movie">
    <div class="movie-poster">
      <img :src="movie.Poster" alt="Movie Poster" />
    </div>
    <div class="movie-content">
      <h2>{{ movie.Title }}</h2>
      <p>
        <span>ImdbRating: </span>
        {{ movie.imdbRating }}
      </p>
      <p class="type"><span>Type:</span> {{ movie.Type }}</p>
      <p class="genre">
        <span> Genre: </span>
        {{ movie.Genre }}
      </p>
      <p>
        <span>Description: </span>
        {{ movie.Plot }}
      </p>

      <button class="watch-movie">Watch movie</button>
    </div>
  </div>
  <div v-else class="loading-movie">Loading <span>movie... </span></div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import key from "../key";
export default {
  setup() {
    const movie = ref(null);
    const route = useRoute();
    const router = useRouter();
    console.log(router);

    onBeforeMount(async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${key.apiKey}&i=${route.params.id}&plot=full`
      );
      movie.value = await response.json();
      if (movie.value.Response === "False") {
        router.push({ name: "NotFound", params: {} });
      }
    });
    return {
      movie,
    };
  },
};
</script>

<style lang="scss" scoped>
.movie-detail {
  margin-top: 50px;
  padding: 16px;
  display: flex;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
  .movie-poster {
    width: 30%;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .movie-content {
    flex: 1;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    p {
      span {
        color: #fff;
      }
      margin: 10px 0;
      color: #ccc;
    }
    .watch-movie {
      outline: none;
      border: none;
      margin-top: 20px;
      padding: 14px 16px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 18px;
      color: #fff;
      background-color: transparentize(#42b883, 0.3);
      transition: all 0.3s ease;
      &:hover {
        background-color: transparentize(#42b883, 0);
      }
    }
  }
}

.loading-movie {
  text-align: center;
  margin-top: 50px;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  span {
    color: #42b883;
  }
}
</style>
