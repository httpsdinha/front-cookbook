<template>
  <article class="recipe">
    <img :src="require(`@/assets/${recipe.image}`)" alt="fotoreceita" class="foto-receita">
    <section class="recipe-details">
      <h2 class="recipe-name">{{ recipe.name }}</h2>
      <p>{{ recipe.description }} </p>
      <button-base width="3rem" class="button-ver" @click="goToPage('/recipe')">
        Ver
      </button-base>
    </section>
  </article>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
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
</style>
