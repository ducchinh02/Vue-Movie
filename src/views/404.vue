<template>
  <div class="page-error">
    <h1>Page <span>Not</span> Found!</h1>
    <router-link :to="{ name: 'Home' }">Back to Home</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-error {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
    span {
      color: #42b883;
    }
  }
  a {
    transition: all 0.3s ease;
    margin-top: 20px;
    font-size: 20px;
    &:hover {
      color: #42b883;
    }
  }
}
</style>
