//estrutura da receita no banco de dados
export default class Recipe {
  constructor({ id, nome, modo_prep, image, custo, tempo, qtd_pessoa }) {
    this.id = id;
    this.nome = nome;
    this.modo_prep = modo_prep;
    this.image = image;
    this.custo = custo;
    this.tempo = tempo;
    this.qtd_pessoa = qtd_pessoa;
  }
}
