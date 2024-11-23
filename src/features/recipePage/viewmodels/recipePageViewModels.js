import axiosInstance from '@/plugins/axios';

async function fetchRecipeData(recipeId) {
    const response = await axiosInstance.get(`/receita/${recipeId}`);
    if (response.status !== 200) {
        throw new Error('Network response was not ok');
    }
    const data = response.data;
    data.qtd_pessoas = `${data.qtdPessoas}`;
    console.log('Fetched recipe data:', data); 
    return data;
}

export { fetchRecipeData };
