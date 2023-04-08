class NegociacaoController {
  constructor() {
    this.campoData = document.querySelector("#data");
    this.campoQuantidade = document.querySelector("#quantidade");
    this.campoValor = document.querySelector("#valor");
  }

  criarNegociacao() {
    const data = new Date(this.campoData.value);
    const quantidade = this.campoQuantidade.value;
    const valor = this.campoValor.value;

    const negociacao = new Negociacao(data, quantidade, valor);
    console.log(negociacao);
  }
}
