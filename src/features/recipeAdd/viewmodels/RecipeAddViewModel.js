import { ref, computed } from 'vue';
import Recipe from '../models/RecipeAdd';
import RecipeService from '../services/RecipeService';

export function useRecipeAddViewModel() {
  const nome = ref('');
  const ingredientes = ref('');
  const modo_prep = ref('');
  const custo = ref('0');
  const tempo = ref('0');
  const qtd_pessoas = ref('0');
  const image = ref(null);
  const imageName = ref('');
  const successMessage = ref('');

  const isFormIncomplete = computed(() => {
    return !nome.value || !ingredientes.value || !modo_prep.value || custo.value === '0' || tempo.value === '0' || qtd_pessoas.value === '0';
  });

  const handleImageUpload = (event) => {
    image.value = event.target.files[0];
    imageName.value = image.value ? `${image.value.name} (${image.value.type})` : '';
  };

  const submitForm = async () => {
    if (isFormIncomplete.value) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const recipe = new Recipe({
      nome: nome.value,
      ingredientes: ingredientes.value,
      modo_prep: modo_prep.value,
      custo: custo.value,
      tempo: tempo.value,
      qtd_pessoas: qtd_pessoas.value,
      image: image.value,
    });

    try {
      await RecipeService.addRecipe(recipe.toFormData());
      successMessage.value = 'Receita enviada com sucesso!';
      alert('Receita adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar a receita:', error);
    }
  };

  return {
    nome,
    ingredientes,
    modo_prep,
    custo,
    tempo,
    qtd_pessoas,
    imageName,
    successMessage,
    isFormIncomplete,
    handleImageUpload,
    submitForm,
  };
}
