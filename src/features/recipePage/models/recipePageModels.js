class Recipe {
    constructor(nome, modo_prep, ingredientes, tempo, qtd_pessoas, custo, imagem) {
        this.nome = nome;
        this.modo_prep = modo_prep;
        this.ingredientes = ingredientes;
        this.tempo = tempo;
        this.qtd_pessoas = qtd_pessoas;
        this.custo = custo;
        this.imagem = imagem;
    }
}

export { Recipe };
