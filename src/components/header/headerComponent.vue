<template>
    <header>
    <h1 @click="goToPage('/')">CookBook</h1>
    <aside class="search responsive-search">
      <input type="text" class="search-input" placeholder="Pesquisar" />
      <img class="search-icon" src="@/assets/procurar.png" alt="Search Icon" />
    </aside>
  </header>
</template>

<script>
export default {
  methods: {
    goToPage(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  background: linear-gradient(270deg, #a12a09 -0.82%, #940d0d 98.56%);
  color: white;
}

h1 {
  color: #fff;
  font-family: 'Jost';
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
.search {
  margin: auto;
  margin-left: 10%;
  position: relative;
  display: inline-block;
  width: 100%;
}

.search-input {
  flex: 1;
  padding-left: 30px;
  border-radius: 0.3125rem;
  background: #d9d9d9;
  border: none;
  width: 100%;
  max-width: 39.4375rem;
  height: 1.6875rem;
}

.search-icon {
  cursor: pointer;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
}

.responsive-search {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>