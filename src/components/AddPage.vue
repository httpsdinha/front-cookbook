<template>
  <header>
    <h1 @click="goToPage('/')">CookBook</h1>
    <aside class="home-search responsive-search">
      <input type="text" class="home-search-input" placeholder="Pesquisar" />
      <img class="home-search-icon" src="../assets/procurar.png" alt="Search Icon" />
    </aside>
  </header>
  <main class="main-container">
    <section class="add-form-container">
        <h2>Adicionar Receita</h2>
        <form @submit.prevent="submitForm">
            <label for="name">Nome da Receita</label>
            <input type="text" id="input-name" class="add-input-nome" v-model="recipeName"/>
            
            <label for="ingrediente">Ingredientes</label>
            <textarea id="input-ingrediente" class="add-input-ingrediente" v-model="ingredients"></textarea>
            
            <label for="preparo">Modo de Preparo</label>
            <textarea id="input-preparo" class="add-input-preparo" v-model="preparation"></textarea>

            <nav class="add-filtersall">
                <div class="add-select-container">
                <img src="../assets/saco-de-dolar.png" alt="Valor Icon" class="add-select-icon" /> 
                <select class="add-filters" ref="customSelect" v-model="value">
                    <option value="0">Valor</option>
                    <option value="1">Alto</option>
                    <option value="2">Médio</option>
                    <option value="3">Baixo</option>
                </select>
                </div>
                <div class="add-select-container">
                <img src="../assets/relogio-tres.png" alt="Tempo Icon" class="add-select-icon" /> 
                <select class="add-filters" v-model="time">
                    <option value="0">Tempo</option>
                    <option value="1">10-30min</option>
                    <option value="2">30-60min</option>
                    <option value="3">+60min</option>
                </select>
                </div>
                <div class="add-select-container">
                <img src="../assets/restaurante.png" alt="Serve Icon" class="add-select-icon" /> 
                <select class="add-filters" v-model="servings">
                    <option value="0">Serve</option>
                    <option value="1">1-2 pessoas</option>
                    <option value="2">3-5 pessoas</option>
                    <option value="3">+6 pessoas</option>
                </select>
                </div>
                <div class="add-select-containeimage">
                  <input type="file" id="image-upload" class="image-upload" @change="handleImageUpload" />
                  <label for="image-upload" class="image-upload-label">Upload Imagem</label>
                </div>
            </nav>
            <button type="submit" class="add-button-adicionar">Adicionar</button>
        </form>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: "AddPage",
  data() {
    return {
      recipeName: '',
      ingredients: '',
      preparation: '',
      value: '0',
      time: '0',
      servings: '0',
      image: null,
    };
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
    handleImageUpload(event) {
      this.image = event.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('recipeName', this.recipeName);
      formData.append('ingredients', this.ingredients);
      formData.append('preparation', this.preparation);
      formData.append('value', this.value);
      formData.append('time', this.time);
      formData.append('servings', this.servings);
      if (this.image) {
        formData.append('image', this.image);
      }
      // Log para verificar os dados do formData
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      try {
        const response = await axios.post('YOUR_BACKEND_URL_HERE', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Form submitted successfully:', response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  },
};
</script>

<style>
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
    background: #D9D9D9;
    border: none;
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

.add-filtersall {
  display: flex;
  justify-content: space-between; /* Changed from flex-start to space-between */
  gap: 1rem;
  width: 100%; 
}

.add-select-container {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.add-select-icon {
  position: absolute;
  left: 10px;
  width: 16px;
  height: 16px;
  pointer-events: none; 
}

.add-filters{
    font-family: 'Jura';
    width: 7.0625rem;
    height: 1.5625rem;
    padding-left: 35px; 
    border-radius: 0.3125rem;
    background: #D9D9D9;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
}


.add-select-container::after {
  content: '';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background-image: url('../assets/arrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  pointer-events: none;
}

input{
    padding: 5px;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  background: linear-gradient(270deg, #a12a09 -0.82%, #940d0d 98.56%);
  color: white;
}

h1 {
  margin-left: 7.12rem;
  color: #fff;
  font-family: 'Jost';
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}

.home-search {
  margin: auto;
  margin-left: 10%;
  position: relative;
  display: inline-block;
  width: 100%;
}

.responsive-search {
  display: flex;
  align-items: center;
  width: 100%;
}

.home-search-input {
  flex: 1;
  padding-left: 30px;
  border-radius: 0.3125rem;
  background: #d9d9d9;
  border: none;
  width: 100%;
  max-width: 39.4375rem;
  height: 1.6875rem;
}

.home-search-icon {
  cursor: pointer;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
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
