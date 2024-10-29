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
  <main></main>
</template>

<script>
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
</style>
