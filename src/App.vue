<template>
  <!-- header -->
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1><span>Vue</span>Movies</h1>
    </router-link>
    <!-- search modal -->
    <div class="search-icon" @click="toggleModal">
      <ion-icon name="search-outline"></ion-icon>
    </div>
  </header>
  <search-modal
    v-if="isShowModal"
    @closeModal="closeModal"
    @searchMovie="searchMovie($event)"
  />
  <!-- router view -->
  <main>
    <router-view :movies="movies" />
  </main>
</template>

<script>
import SearchModal from "./components/SearchModal.vue";
export default {
  data() {
    return {
      isShowModal: false,
      movies: [],
    };
  },
  methods: {
    searchMovie(data) {
      this.movies = data.movies;
      this.isShowModal = false;
    },
    closeModal() {
      this.isShowModal = false;
    },
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
  components: { SearchModal },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.search-icon {
  position: absolute;
  right: 10%;
  font-size: 30px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  color: #fff;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    color: transparentize(#42b883, 0.3);
  }
}
</style>
