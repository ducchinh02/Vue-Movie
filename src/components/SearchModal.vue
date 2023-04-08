<template>
  <div class="search-modal" @click.self="close">
    <form @submit.prevent="search">
      <input type="text" placeholder="Search movie..." v-model="searchValue" />
      <button type="submit" class="icon">
        <ion-icon name="search-circle"></ion-icon>
      </button>
    </form>

    <!-- close modal -->
    <div class="close" @click="close">
      <ion-icon name="close"></ion-icon>
    </div>
  </div>
</template>

<script>
import key from "../key";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup(props, { emit }) {
    const searchValue = ref("");
    const searchData = ref([]);
    console.log(props);
    const router = useRouter();
    const search = () => {
      fetch(
        `http://www.omdbapi.com/?apikey=${key.apiKey}&s=${searchValue.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          searchData.value = [...data.Search];
          emit("searchMovie", { movies: searchData.value });
          router.push({ name: "Home", params: {} });
        });
      searchValue.value = "";
    };

    const close = () => {
      emit("closeModal");
    };
    return {
      searchValue,
      searchData,
      search,
      close,
    };
  },
  mounted() {
    document.querySelector("input").focus();
  },
};
</script>

<style lang="scss" scoped>
.search-modal {
  position: fixed;
  inset: 0;
  background-color: rgba($color: #000000, $alpha: 0.8);
  z-index: 999999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    width: 60%;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    input {
      outline: none;
      border: none;
      padding: 14px 16px;
      width: 100%;
      font-size: 18px;
      border-radius: 10px;
      background-color: #35495e;
      color: #fff;
      &::placeholder {
        color: #ccc;
      }
    }
    .icon {
      outline: none;
      border: none;
      background: none;
      position: absolute;
      right: 10px;
      font-size: 40px;
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
  }
  .close {
    position: absolute;
    display: flex;
    color: #fff;
    align-items: center;
    top: 5%;
    right: 5%;
    font-size: 40px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: transparentize(#42b883, 0.3);
    }
  }
}
</style>
