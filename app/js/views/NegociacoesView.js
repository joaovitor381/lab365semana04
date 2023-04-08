class NegociacoesView {
  constructor(elemento) {
    this._elemento = elemento;
  }

  _template(model) {
    return `
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Data</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            ${model.negociacoes
              .map(
                (n) => `
              <tr>
                <td>${DateHelper.dataParaTexto(n.data)}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3"></td>
              <td>${model.volumeTotal}</td>
            </tr>
          </tfoot>
        </table>
      `;
  }

  update(model) {
    this._elemento.innerHTML = this._template(model);
  }
}
