<template>
    <header-component/>
    <main class="main-container">
      <section class="add-form-container">
          <h2>Adicionar Receita</h2>
          <form @submit.prevent="submitForm">
              <label for="name">Nome da Receita</label>
              <input type="text" id="input-name" class="add-input-nome" v-model="nome"/>
              
              <label for="ingrediente">Ingredientes</label>
              <textarea id="input-ingrediente" class="add-input-ingrediente" v-model="ingredientes"></textarea>
              
              <label for="preparo">Modo de Preparo</label>
              <textarea id="input-preparo" class="add-input-preparo" v-model="modo_prep"></textarea>
                  <filters-base @valueChange="custo = $event" @timeChange="tempo = $event" @serveChange="qtd_pessoas = $event" />
                  <div class="add-select-containeimage">
                    <input type="file" id="image-upload" class="image-upload" @change="handleImageUpload" />
                    <label for="image-upload" class="image-upload-label">Enviar Imagem</label>
                    <p v-if="imageName" class="image-name">{{ imageName }}</p>
                  </div>
              <button type="submit" class="add-button-adicionar" :disabled="isFormIncomplete">Adicionar</button>
          </form>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </section>
    </main>
  </template>
  
  <script>
  import { useRecipeAddViewModel } from '../viewmodels/RecipeAddViewModel';
  
  export default {
    setup() {
      const {
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
      } = useRecipeAddViewModel();
  
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
    },
  };
  </script>
  
  <style scoped>
  .main-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
  }
  
  .add-form-container {
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      width: 48.75rem;
      height: 39rem;
      flex-shrink: 0;
      border-radius: 0.3125rem;
      background: #FFF;
      position: relative; 
  }
  
  form {
      display: flex;
      flex-direction: column;
      align-items: flex-start; 
      width: 80%; 
      margin: 0 auto; 
  }
  
  label {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
  }
  
  h2 {
      margin-top: 3rem; 
      margin-bottom: 1rem; 
      text-align: center; 
      font-family: "Jost";
  }
  
  .add-input-nome, .add-input-ingrediente, .add-input-preparo {
      border-radius: 0.3125rem;
      background: transparent;
      border: 1px solid #940D0D;
      margin-bottom: 1rem;
  }
  
  .add-input-nome{
      width: 100%; 
      height: 1.6875rem;
  }
  
  .add-input-preparo, .add-input-ingrediente {
      padding-top: 0.5rem; 
      width: 100%;
      height: 5rem;
      padding:0.5rem;
  }
  
  .add-button-adicionar{
      border-radius: 0.3125rem;
      background: linear-gradient(
          90deg, 
          #A12A09 0%, 
          #940D0D 100%);
      width: 6.1875rem;
      height: 1.75rem;
      border:none;
      color: #FFF;
      font-family: Jost;
      position: absolute; 
      bottom: 2.5rem; 
      left: 50%; 
      transform: translateX(-50%); 
      cursor: pointer;
  }
  
  .add-button-adicionar:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  input{
      padding: 5px;
  }
  
  .image-upload {
    display: none;
  }
  
  .image-upload-label {
    border-radius: 0.3125rem;
    background: linear-gradient(270deg, #a12a09 -0.82%, #940d0d 98.56%);
    padding: 0.3rem 1rem;
    cursor: pointer;
    color: #fff;
    font-family: 'Jura';
    
  }
  .add-select-containeimage{
    margin-left: auto; 
  }
  
  .success-message {
    color: green;
    text-align: center;
    margin-top: 1rem;
    font-family: 'Jost';
  }
  
  .image-name {
    margin-top: 0.5rem;
    font-family: 'Jura';
    color: #333;
  }
  
  @media (max-width: 768px) {
    .main-container {
      height: auto;
      padding: 1rem;
    }
  
    .add-form-container {
      width: 100%;
      height: auto;
      padding: 1rem;
    }
  
    form {
      width: 100%;
    }
  
    .add-input-nome, .add-input-ingrediente, .add-input-preparo {
      width: 100%;
    }
  
    .add-filtersall {
      flex-direction: column;
      gap: 0.5rem;
    }
  
    .add-select-container {
      width: 100%;
    }
  
    .add-filters {
      width: 100%;
      padding-left: 2rem;
    }
  
    .add-button-adicionar {
      width: 100%;
      position: static;
      transform: none;
      margin-top: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .home-search-input {
      padding-left: 2rem;
    }
  
    .home-search-icon {
      left: 0.5rem;
    }
  
    .add-select-icon {
      left: 0.5rem;
    }
  
    .add-filters {
      padding-left: 2.5rem;
    }
  }
  </style>