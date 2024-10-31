<template>
    <header>
    <h1 @click="goToPage('/')">CookBook</h1>
    <aside class="Search responsive-search">
      <input type="text" class="Search-Input" placeholder="Pesquisar" />
      <img class="Search-Icon" src="../assets/procurar.png" alt="Search Icon" />
    </aside>
  </header>
  <main class="main-container">
    <section class="form-container">
        <h2>Adicionar Receita</h2>
        <form>
            <label for="name">Nome da Receita</label>
            <input type="text" id="input-name" class="input-nome"/>
            
            <label for="ingrediente">Ingredientes</label>
            <input type="text" id="input-ingrediente" class="input-ingrediente"/>
            
            <label for="preparo">Modo de Preparo</label>
            <input type="text" id="input-preparo" class="input-preparo"/>

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
            <button type="submit" class="button-adicionar">Adicionar</button>
        </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "AddPage",
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
}

.form-container {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    width: 48.75rem;
    height: 39rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    background: #FFF;
    position: relative; 
}

form {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    width: 80%; 
    margin: 0 auto; 
}

label {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

h2 {
    margin-top: 3rem; 
    margin-bottom: 1rem; 
    text-align: center; 
    font-family: "Jost";
}

.input-nome, .input-ingrediente, .input-preparo {
    border-radius: 0.3125rem;
    background: #D9D9D9;
    border: none;
    margin-bottom: 1rem;
}

.input-nome{
    width: 100%; 
    height: 1.6875rem;
}

.input-preparo, .input-ingrediente {
    width: 100%; 
    height: 5.9375rem;
}

.button-adicionar{
    border-radius: 0.3125rem;
    background: linear-gradient(
        90deg, 
        #A12A09 0%, 
        #940D0D 100%);
    width: 6.1875rem;
    height: 1.75rem;
    border:none;
    color: #FFF;
    font-family: Jost;
    position: absolute; 
    bottom: 2.5rem; 
    left: 50%; 
    transform: translateX(-50%); 
    cursor: pointer;
}

.filtersall {
    align-self: flex-start; 
    width: 100%; 
    display: flex; 
    flex-direction: row; 
    margin: 0;
    gap: 1rem; 
}

.select-container {
    align-self: flex-start;
    width: 8rem; 
}

.filters{
    background: #D9D9D9;
    margin: 0;
    width: 100%; 
}

input{
    padding-left: 0.5rem; 
}

.select-icon{
    margin: 0;
}
</style>
