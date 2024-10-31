<template>
  <header>
    <h1 @click="goToPage('/')">CookBook</h1>
    <aside class="home-search responsive-search">
      <input type="text" class="home-search-input" placeholder="Pesquisar" />
      <img class="home-search-icon" src="../assets/procurar.png" alt="Search Icon" />
    </aside>
  </header>
  <nav class="home-filtersall">
    <div class="home-select-container">
      <img src="../assets/saco-de-dolar.png" alt="Valor Icon" class="home-select-icon" /> 
      <select class="home-filters" ref="customSelect">
        <option value="0">Valor</option>
        <option value="1">Alto</option>
        <option value="2">Médio</option>
        <option value="3">Baixo</option>
      </select>
    </div>
    <div class="home-select-container">
      <img src="../assets/relogio-tres.png" alt="Tempo Icon" class="home-select-icon" /> 
      <select class="home-filters">
        <option value="0">Tempo</option>
        <option value="1">10-30min</option>
        <option value="2">30-60min</option>
        <option value="3">+60min</option>
      </select>
    </div>
    <div class="home-select-container">
      <img src="../assets/restaurante.png" alt="Serve Icon" class="home-select-icon" /> 
      <select class="home-filters">
        <option value="0">Serve</option>
        <option value="1">1-2 pessoas</option>
        <option value="2">3-5 pessoas</option>
        <option value="3">+6 pessoas</option>
      </select>
    </div>
    <button class="home-adicionar" @click="goToPage('/adicionar')">
      Adicionar
    </button>
  </nav>
  <main>
    <section class="home-recipes-container">
      <article v-for="recipe in recipes" :key="recipe.id" class="home-recipe">
        <img :src="recipe.image" alt="fotoreceita" class="home-fotoreceita">
        <section class="home-recipe-details">
          <h2>{{ recipe.name }}</h2>
          <p>{{ recipe.description }} </p>
          <button class="home-ver" @click="goToPage(`/id/${recipe.id}`)">
            Ver
          </button>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
import recipes from '../test/recipes.json';

export default {
  name: "HomePage",
  data(){
    return { 
      recipes,
    };
  },
  methods: {
    goToPage(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style>
body {
  background-color: #d9d9d9;
  overflow: auto;
}

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
  margin-left: 7.12rem;
  color: #fff;
  font-family: 'Jost';
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}

.home-search {
  margin: auto;
  margin-left: 10%;
  position: relative;
  display: inline-block;
  width: 100%;
}

.responsive-search {
  display: flex;
  align-items: center;
  width: 100%;
}

.home-search-input {
  flex: 1;
  padding-left: 30px;
  border-radius: 0.3125rem;
  background: #d9d9d9;
  border: none;
  width: 100%;
  max-width: 39.4375rem;
  height: 1.6875rem;
}

.home-search-icon {
  cursor: pointer;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
}

.home-select-container {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.home-select-icon {
  margin: 5px;
  position: absolute;
  left: 10px;
  width: 16px;
  height: 16px;
  pointer-events: none; /* Evita que o ícone interfira na interação */
}

.home-filters {
  font-family: 'Jura';
  width: 7.0625rem;
  height: 1.5625rem;
  padding-left: 35px; /* Ajuste para ícone */
  border-radius: 0.3125rem;
  background: #fff;
  border: none;
  margin: 0.625rem;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.home-filtersall {
  margin-left: 7.38rem;
  margin-top: 2rem;
}

/* Seta customizada */
.home-select-container::after {
  content: '';
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background-image: url('../assets/arrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  pointer-events: none;
}

.home-recipe {
  background-color: #fff;
  border-radius: 0.3125rem;
  margin-top: 1.25rem;
  margin-left: 8rem;
  width: 100%;
  max-width: 31.625rem;
  height: auto;
  flex-shrink: 0;
}

.home-adicionar {
  background: linear-gradient(90deg, #A12A09 0%, #940D0D 100%);
  font-family: 'Jost';
  border-radius: 0.3125rem;
  border: none;
  color: #FFF;
  width: 100%;
  max-width: 7.0625rem;
  height: 1.5625rem;
  float: right;
  margin-right: 7.38rem;
  cursor: pointer;
  margin-top: 0.6rem;
}

.home-ver {
  cursor: pointer;
  width: 4rem;
  height: 1.75rem;
  border-radius: 0.3125rem;
  border: none;
  background: linear-gradient(90deg, #A12A09 0%, #940D0D 100%);
  color: #FFF;
  font-family: 'Jost';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
}

.home-ver:hover,
.home-adicionar:hover {
  background: #A12A09;
}

.home-fotoreceita {
  width: 9.375rem;
  height: 9.375rem;
  flex-shrink: 0;
  margin: 1rem;
}

.home-recipe {
  display: flex;
  width: calc(100% - 0.5rem);
  box-sizing: border-box;
  margin: 2.5rem;
  margin-bottom: 0rem;
  position: relative;
}

.home-recipes-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
}

.home-recipe-details {
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.home-recipe-details h2 {
  color: #000;
  font-family: Jura;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

p {
  color: #000;
  font-family: Jura;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  max-width: 17.875rem;
  margin-top: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (max-width: 600px) {
  .responsive-search {
    flex-direction: column;
    align-items: stretch;
  }

  .home-search-input {
    width: 100%;
    margin-bottom: 10px;
  }

  .home-search-icon {
    align-self: center;
  }

  .home-recipe {
    width: calc(100% - 0.5rem); /* 1 item por linha */
  }
}

@media (max-width: 1200px) {
  .home-recipe {
    width: calc(33.33% - 0.5rem); /* 3 items por linha */
  }
}

@media (max-width: 900px) {
  .home-recipe {
    width: calc(50% - 0.5rem); /* 2 items por linha */
  }
}
</style>
