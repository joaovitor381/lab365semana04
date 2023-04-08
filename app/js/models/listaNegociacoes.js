class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }
}

class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._campoData = $("#data");
    this._campoQuantidade = $("#quantidade");
    this._campoValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();
  }

  criarNegociacao(event) {
    event.preventDefault();
    let negociacao = new Negociacao(
      new Date(this._campoData.value.replace(/-/g, ",")),
      parseInt(this._campoQuantidade.value),
      parseFloat(this._campoValor.value)
    );
    this._listaNegociacoes.adiciona(negociacao);
    console.log(this._listaNegociacoes.negociacoes);
  }
}

class NegociacoesList {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  filtra(criterio) {
    return this._negociacoes.filter(criterio);
  }
}
