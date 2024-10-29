<template>
  <header>
    <h1>CookBook</h1>
    <aside class="Search">
      <input type="text" class="Search-Input" placeholder="Pesquisar" />
      <img class="Search-Icon" src="../assets/procurar.png" alt="Search Icon" />
    </aside>
  </header>
  <nav class="filtersall">
    <div class="select-container">
      <img src="../assets/saco-de-dolar.png" alt="Valor Icon" class="select-icon" /> 
      <select class="filters" ref="customSelect">
        <option value="0">Valor</option>
        <option value="1">Alto</option>
        <option value="2">Médio</option>
        <option value="3">Baixo</option>
      </select>
    </div>
    <div class="select-container">
      <img src="../assets/relogio-tres.png" alt="Tempo Icon" class="select-icon" /> 
      <select class="filters">
        <option value="0">Tempo</option>
        <option value="1">10-30min</option>
        <option value="2">30-60min</option>
        <option value="3">+60min</option>
      </select>
    </div>
    <div class="select-container">
      <img src="../assets/restaurante.png" alt="Serve Icon" class="select-icon" /> 
      <select class="filters">
        <option value="0">Serve</option>
        <option value="1">1-2 pessoas</option>
        <option value="2">3-5 pessoas</option>
        <option value="3">+6 pessoas</option>
      </select>
    </div>
  </nav>
  <main>
    <section>
      <article class="recipe">
        <img src="../assets/icone.jpg" alt="fotoreceita" class="fotoreceita">
        <section class="recipe-details">
          <h2>Nome Receita</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
          </p>
          <button class="ver" @click="goToPage('/id')">
          Ver
          </button>
       </section>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
body {
  background-color: #d9d9d9;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
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
}

.Search {
  margin: 0 auto;
  margin-right: 25%;
  position: relative;
  display: inline-block;
}

.Search-Input {
  padding-left: 30px;
  border-radius: 0.3125rem;
  background: #d9d9d9;
  border: none;
  width: 39.4375rem;
  height: 1.6875rem;
  flex-shrink: 0;
}

.Search-Icon {
  cursor: pointer;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
}

.select-container {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.select-icon {
  margin: 5px;
  position: absolute;
  left: 10px;
  width: 16px;
  height: 16px;
  pointer-events: none; /* Evita que o ícone interfira na interação */
}

.filters {
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

nav{
  margin-left: 7.38rem;
  margin-top: 2rem;
}
/* Seta customizada */
.select-container::after {
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
article{
  background-color: #fff;
  border-radius: 0.3125rem;
  margin-top: 1.25rem;
  margin-left: 8rem;
  width: 31.625rem;
  height: 11.5625rem;
  flex-shrink: 0;
}

.ver {
  cursor: pointer;
  width: 4rem;
  height: 1.75rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: none;
  background: linear-gradient(90deg, #A12A09 0%, #940D0D 100%);
  color: #FFF;
  font-family: 'Jost';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: auto; 
  margin-bottom: 1rem;
}

.ver:hover{
  background: #A12A09;
}

.fotoreceita{
  width: 9.375rem;
  height: 9.375rem;
  flex-shrink: 0;
  margin: 1rem;
}

.recipe{
  display:flex;
  align-items: center;
}

.recipe-details{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
}

.recipe-details h2{
  color: #000;
  font-family: Jura;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

p{
  color: #000;
  font-family: Jura;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 17.875rem;
  margin-top: 0;
}
</style>
