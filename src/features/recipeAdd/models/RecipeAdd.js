export default class Recipe {
    constructor({ nome, ingredientes, modo_prep, custo, tempo, qtd_pessoas, image = null }) {
      this.nome = nome;
      this.ingredientes = ingredientes;
      this.modo_prep = modo_prep;
      this.custo = custo;
      this.tempo = tempo;
      this.qtd_pessoas = qtd_pessoas;
      this.image = image;
    }
    isComplete() {
      return (
        this.nome &&
        this.ingredientes &&
        this.modo_prep &&
        this.custo !== '0' &&
        this.tempo !== '0' &&
        this.qtd_pessoas !== '0'
      );
    }
    setImage(imageFile) {
      this.image = imageFile;
    }
    toFormData() {
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
      return formData;
    }
  }
  