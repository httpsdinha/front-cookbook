//lógica de apresentação para gerenciar o estado e as receitas

import { ref, onMounted } from 'vue';
import RecipeService from '../services/RecipeService';

export function useRecipeListViewModel() {
  const recipes = ref([]);

  const loadRecipes = async () => {
    recipes.value = await RecipeService.getRecipes();
  };

  const goToRecipe = (id) => {
    window.location.href = `/receita/${id}`;
  };

  onMounted(loadRecipes);

  return {
    recipes,
    goToRecipe,
  };
}
