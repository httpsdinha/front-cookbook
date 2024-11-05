import axiosInstance from '@/plugins/axios';

export default {
  async addRecipe(recipeData) {
    try {
      const response = await axiosInstance.post('adicionar', recipeData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar receita:', error);
      throw error;
    }
  }
};
