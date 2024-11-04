<template>
  <header>
    <h1 @click="goToPage('/')">CookBook</h1>
    <aside class="recipe-search responsive-search">
      <input type="text" class="recipe-search-input" placeholder="Pesquisar" />
      <img class="recipe-search-icon" src="../assets/procurar.png" alt="Search Icon" />
    </aside>
  </header>

  <main>
    <button class="edit-icon">
        <img src="../assets/editar-documento.png" alt="editar_icon" class="editar_icon">
    </button>

    <section class="receita">
      <section class="left_main">
        <img src="../assets/negroni.jpg" alt="negroni" class="imagem_receita">
        <h2 class="ingredientes">Ingredientes</h2>
        <ul>
          <li>1 dose de Campari</li>
          <li>1 dose de Gin</li>
          <li>Gelo à vontade</li>
          <li>1 dose de Vermute tinto</li>
          <li>1 rodela de laranja com casca e sem semente</li>
        </ul>
      </section>

      <section class="right_main">
        <h2>Receita</h2>
        <section class="info-container">
          <article>
            <img src="../assets/restaurante.png" alt="talheres" class="icon_info_prato">
            <p class="info_prato">2 pessoas</p>
          </article>
          <article>
            <img src="../assets/saco-de-dolar.png" alt="custo" class="icon_info_prato">
            <p class="info_prato">Custo Médio</p>
          </article>
          <article>
            <img src="../assets/relogio-tres.png" alt="tempo_preparo" class="icon_info_prato">
            <p class="info_prato">40 min</p>
          </article>
        </section>
        <section class="modo-preparo">
          <h2>Modo de Preparo</h2>
          <p class="modo_preparo">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>
        </section>
      </section>
    </section>
  </main>
</template>

<script src="../scripts/recipe_script.js"></script>

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

.recipe-search {
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

.recipe-search-input {
  flex: 1;
  padding-left: 30px;
  border-radius: 0.3125rem;
  background: #d9d9d9;
  border: none;
  width: 100%;
  max-width: 39.4375rem;
  height: 1.6875rem;
}

.recipe-search-icon {
  cursor: pointer;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
}

h2 {
  margin: 0px;
  color: #000;
  font-family: "Jura";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

ul {
  list-style-type: none;
  padding-left: 0px;
  margin-bottom: 30px;
}

main {
  margin: 5%;
  background-color: white;
  border-radius: 5px;
  position: relative;
  font-family: "Jura";
}

.imagem_receita {
  border-radius: 10px;
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.receita {
  display: flex;
  padding-top: 3rem;
}

.left_main {
  width: 250px;
  margin-left: 1.7rem;
  margin-right: 25px;
}

.left_main h2{
  text-align: left;
}

.right_main {
  margin-left: 1rem;
  margin-right: 1rem;
  width: 100%;
}

.right_main h2{
  text-align: left;
  margin-bottom: 0.5rem;
}

.editar_icon {
  width: 25px;
}

.edit-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.icon_info_prato {
  width: 1rem;
  height: 1rem;
}

.info_prato {
  font-size: 15px;
  margin-left: 5px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
}

.modo_preparo {
  margin-bottom: 30px;
  box-sizing: border-box;
  word-wrap: break-word;
  max-width: 100%;
}

.info-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.info-container article {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.modo-preparo{
  margin-top: 1rem;
  display: flex; 
  flex-direction: column; 
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
  }

  .recipe-search {
    margin-left: 0;
    width: 100%;
  }

  .receita {
    flex-direction: column;
    align-items: center;
  }

  .left_main, .right_main {
    width: 100%;
    margin: 0;
    padding: 1rem;
  }

  .imagem_receita {
    width: 100%;
    height: auto;
  }

  .modo_preparo {
    width: 100%;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  .recipe-search-input {
    font-size: 0.875rem;
    height: 1.5rem;
  }

  .info_prato {
    font-size: 0.875rem;
  }

  .icon_info_prato {
    width: 0.875rem;
    height: 0.875rem;
  }
}

</style>