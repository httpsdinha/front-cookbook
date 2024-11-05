<template>
  <header-component />
  <nav class="filters">
    <filters-base
      @valueChange="handleValueChange"
      @timeChange="handleTimeChange"
      @serveChange="handleServeChange"
    />
    <button-base class="button-adicionar" @click="goToPage('/add')">
      Adicionar
    </button-base>
  </nav>

  <main>
    <section class="recipes-container">
      <recipe-card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </section>
  </main>
</template>

<script>
import { recipes, RecipeCard } from '../services/RecipeService';

export default {
  name: "HomePage",
  components: {
    RecipeCard
  },
  data() {
    return {
      recipes,
    };
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center; 
  justify-content: space-between;
  margin: 1rem 16rem;
}

.recipe {
  background-color: #fff;
  border-radius: 0.3125rem;
  margin-top: 1.25rem;
  width: 100%;
  max-width: 31.625rem;
  height: auto;
  flex-shrink: 0;
  display: flex;
  width: calc(100% - 0.5rem);
  box-sizing: border-box;
  margin: 0 0.5rem 1rem 0.5rem;
  position: relative;
}

.button-ver {
  position: absolute;
  right: 0;
  margin: 1rem;
}

.foto-receita {
  width: 9.375rem;
  height: 9.375rem;
  flex-shrink: 0;
  margin: 1rem;
}

.recipes-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
}

.recipe-details {
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  padding: 1rem;
}

.recipe-details h2 {
  color: #000;
  font-family: Jura;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.5rem;
  text-align: left; 
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

@media (max-width: 1800px) {
  .recipe {
    width: calc(33.33% - 0.5rem); 
  }
}

@media (max-width: 1200px) {
  .recipe {
    width: calc(50% - 0.5rem); 
  }
}

@media (max-width: 600px) {
  .recipe {
    width: calc(100% - 1rem);
  }
}
</style>