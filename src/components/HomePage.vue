<template>
  <div class="home-page">
    <header>
      <h1> CookBook</h1>
      <aside class="Search">
        <input type="text" class="Search-Input"  placeholder="Pesquisar"/>
        <img class="Search-Icon" src="../assets/procurar.png" alt="Search Icon" />
      </aside>
    </header>
    <main>
    <nav class="filters">
      <button class="custo"
      @click="toggleDropdown('custo')"
      :aria-expanded="isOpenCusto"
      aria-haspopup="listbox"
      aria-label="Custo"
      >
      <img src="../assets/saco-de-dolar.png" alt="CustoIcon" class="CustoIcon">
      <span>{{ selectedOptionCusto }}</span>
      <span class="arrow">
        <img src="../assets/arrow.png" alt="ArrowIcon" class="arrow">
      </span>
      </button>
      <ul v-if="isOpenCusto" class="options" role="listbox">
        <li
        v-for="option in optionsCusto"
        :key="option"
        @click="selectOption('custo', option)"
        >
        {{ option }}
        </li>
      </ul>
      <button class="tempo"
      @click="toggleDropdown('tempo')"
      :aria-expanded="isOpenTempo"
      aria-haspopup="listbox"
      aria-label="Tempo"
      >
      <img src="../assets/relogio-tres.png" alt="TempoIcon" class="TempoIcon">
      <span>{{ selectedOptionTempo }}</span>
      <span class="arrow">
        <img src="../assets/arrow.png" alt="ArrowIcon" class="arrow">
      </span>
      </button>
      <ul v-if="isOpenTempo" class="options" role="listbox">
        <li
        v-for="option in optionsTempo"
        :key="option"
        @click="selectOption('tempo', option)"
        >
        {{ option }}
        </li>
      </ul>
      <button class="serve"
      @click="toggleDropdown('serve')"
      :aria-expanded="isOpenServe"
      aria-haspopup="listbox"
      aria-label="Serve"
      >
      <img src="../assets/restaurante.png" alt="ServeIcon" class="ServeIcon">
      <span>{{ selectedOptionServe }}</span>
      <span class="arrow">
        <img src="../assets/arrow.png" alt="ArrowIcon" class="arrow">
      </span>
      </button>
      <ul v-if="isOpenServe" class="options" role="listbox">
        <li
        v-for="option in optionsServe"
        :key="option"
        @click="selectOption('serve', option)"
        >
        {{ option }}
        </li>
      </ul>
    </nav>
    <section v-for="item in ReceitaList" :key="item.id" class="receitas-list">
      <article class="receita-list-content">
        <h2>{{ receita.nome }}</h2>
        <p>{{ receita.descricao }}</p>
      </article>
    </section>
  </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isOpenCusto: false,
      selectedOptionCusto: 'Custo',
      optionsCusto: ['Alto', 'Médio', 'Baixo'],
      isOpenTempo: false,
      selectedOptionTempo: 'Tempo',
      optionsTempo: ['10-30min', '30-60min', '+60min'],
      isOpenServe: false,
      selectedOptionServe: 'Serve',
      optionsServe: ['1-2 pessoas', '3-4 pessoas', '+5 pessoas']
    };
  },
  methods: {
    toggleDropdown(type) {
      if (type === 'custo') {
        this.isOpenCusto = !this.isOpenCusto;
      } else if (type === 'tempo') {
        this.isOpenTempo = !this.isOpenTempo;
      } else if (type === 'serve') {
        this.isOpenServe = !this.isOpenServe;
      }
    },
    selectOption(type, option) {
      if (type === 'custo') {
        this.selectedOptionCusto = option;
        this.isOpenCusto = false;
      } else if (type === 'tempo') {
        this.selectedOptionTempo = option;
        this.isOpenTempo = false;
      } else if (type === 'serve') {
        this.selectedOptionServe = option;
        this.isOpenServe = false;
      }
    },
    async fetchReceitaList() {
    try{
      const response = await axios.get('https://api.cookbook.com/receitas');
      this.receitaList = response.data;
    } catch (error) {
      console.error("Erro ao buscar itens do menu ",error);
    }
  }
}
};
</script>

<style scoped>
  .home-page{
    background: #D9D9D9;
  }

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
    font-family: 'Jost';
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .Search{
    margin: 0 auto;
    margin-right: 25%;
    position: relative; 
    display: inline-block;
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

  .filters {
      margin-top: 2rem;
      margin-left: 7.37rem;
      position: relative;
      width: 120px;
      display: flex;
      gap: 10px;
    }
  
  .custo, .tempo, .serve {
    background: #FFF;
    display: flex;
    align-items: center;
    padding: 8px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Jura';
  }
  
  .CustoIcon, .TempoIcon, .ServeIcon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  
  .arrow {
    margin-left: 2px;
    width: 10px;
    height: 10px;

  }
  
  .options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    list-style: none;
    margin: 0;
    padding: 0;
    color: #000;
    font-family: 'Jura';
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  
  .options li {
    padding: 8px;
    cursor: pointer;
  }
  
  .options li:hover {
    background-color: #f0f0f0;
  }
</style>