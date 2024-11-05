//estrutura da receita no banco de dados
export default class Recipe {
    constructor({ id, nome, modo_prep, image }) {
      this.id = id;
      this.nome = nome;
      this.modo_prep = modo_prep;
      this.image = image;
    }
  }
  