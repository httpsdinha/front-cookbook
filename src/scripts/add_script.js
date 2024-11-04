import axios from 'axios';

export default {
  name: "AddPage",
  data() {
    return {
      nome: '',
      ingredientes: '',
      modo_prep: '',
      custo: '0',
      tempo: '0',
      qtd_pessoas: '0',
      image: null,
      imageName: '',
      successMessage: '',
    };
  },
  computed: {
    isFormIncomplete() {
      return !this.nome || !this.ingredientes || !this.modo_prep || this.custo === '0' || this.tempo === '0' || this.qtd_pessoas === '0';
    }
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
    handleImageUpload(event) {
      this.image = event.target.files[0];
      this.imageName = this.image ? `${this.image.name} (${this.image.type})` : '';
    },
    async submitForm() {
      if (this.isFormIncomplete) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const formData = new FormData();
      formData.append('nome', this.nome);
      formData.append('ingredientes', this.ingredientes);
      formData.append('modo_prep', this.modo_prep);
      formData.append('custo', this.custo);
      formData.append('tempo', this.tempo);
      formData.append('qtd_pessoas', this.qtd_pessoas);
      if (this.image) {
        formData.append('image', this.image);
      }
      // Log para verificar os dados do formData
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      try {
        const response = await axios.post('http://localhost:8090/receita/adicionar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Form submitted successfully:', response.data);
        this.successMessage = 'Receita enviada com sucesso!';
        alert('Receita adicionada com sucesso!');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  },
};