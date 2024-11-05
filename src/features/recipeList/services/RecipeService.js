// imports
// chamada da api/script
import recipes from '@/test/recipes.json';
import RecipeCard from '../components/RecipeCard.vue';

export { recipes, RecipeCard };

export default {
  async getRecipes() {
    return recipes;
  },
};

