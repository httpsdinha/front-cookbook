<template>
    <header>
      <h1> CookBook</h1>
      <aside class="Search">
        <input type="text" class="Search-Input"  placeholder="Pesquisar"/>
        <img class="Search-Icon" src="../assets/procurar.png" alt="Search Icon" />
      </aside>
    </header>
  
    <main>
  
      <div>
        <a href="">
          <img src="../assets/editar-documento.png" alt="editar_icon" class="editar_icon">
        </a>
      </div>
  
      
      <section class="receita">
        <section class="left_main">
          <img src="../assets/negroni.jpg" alt="negroni" class="imagem_receita">
          <h2>Ingredientes</h2>
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
  
          <div style="display: flex; align-items: center;">
            <img src="../assets/restaurante.png" alt="talheres" class="icon_info_prato">
            <p class="info_prato">2 pessoas</p>
            <img src="../assets/saco-de-dolar.png" alt="custo" class="icon_info_prato">
            <p class="info_prato">Custo Médio</p>
            <img src="../assets/relogio-tres.png" alt="tempo_preparo" class="icon_info_prato">
            <p class="info_prato">40 min</p>
          </div>
          <h2>Modo de Preparo</h2>
          <p class="modo_preparo">
            Coloque o gelo e 1 rodela de laranja em um copo. Em seguida, junte o vermute, o Campari e o gin e misture as bebidas com uma colher. Termine colocando a outra rodela de laranja e sirva.
          </p>
        </section>
      </section>
  
  
      
  
      
    </main>
  
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: linear-gradient(270deg, #A12A09 -0.82%, #940D0D 98.56%);
    color: white;
  }
  
  h1{
    margin-left: 7.12rem;
    color: #FFF;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  h2 {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
  }
  
  .Search{
    margin: 0 auto;
    margin-right: 25%;
    position: relative; 
    display: inline-block;
  }
  
  ul {
    list-style-type: none;
    padding-left: 20px;
    margin-bottom: 30px;
  }
  
  .Search-Input{
    padding-left: 30px;
    border-radius: 0.3125rem;
    background: #D9D9D9;
    border: none;
    width: 39.4375rem;
    height: 1.6875rem;
    flex-shrink: 0;
  }
  
  .Search-Icon{
    cursor: pointer;
    position: absolute; 
    left: 5px; 
    top: 50%; 
    transform: translateY(-50%); 
    width: 15px; 
    height: 15px;
  }
  
  main {
    margin: 5%;
    background-color: white;
    border-radius: 5px;
  }
  
  .imagem_receita {
    border-radius: 10px;
    width: 250px;
    height: 250px;
    object-fit: cover;
  
  }
  
  .receita {
    display: flex;
    padding-top: 75px;
  }
  
  .left_main {
    width: 250px;
    margin-left: 50px;
    margin-right: 25px;
  }
  
  .right_main {
    margin-left: 25px;
    margin-right: 100px;
    text-align: justify;
  }
  
  .editar_icon {
    margin-right: 50px;
    margin-top: 40px;
    width: 25px;
    float: right;
  }
  
  .icon_info_prato {
    width: 1rem;
    height: 1rem;
  }
  
  .info_prato {
    font-size: 15px;
    margin-left: 5px;
    margin-right: 12px;
  }
  
  .modo_preparo {
    margin-bottom: 30px;
  }
  </style>