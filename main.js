class tasklist {
  constructor() {
    this.tituloInput = document.getElementById('titleInput');
    this.mensagemInput = document.getElementById('messageField');
    this.adicionar = document.getElementById('bnt');
    this.caixaRecados = document.getElementById('caixa-recados')

    // console.log(this.tituloInput, this.mensagemInput, this.adicionar);
    this.recados = [];

    this.registraEventoBtnAdicionar();
  }

  registraEventoBtnAdicionar() {
    this.adicionar.onclick = () => this.novaMensagem();
  }

  botaoEventos() {
    document.querySelectorAll(".botao-deletar").forEach((item) => {
      item.onclick = () => this.deletaMensagem();
    });
  }

  criarRecados() {
    this.caixaRecados.innerHTML = "";

    for (const recado of this.recados) {
      let position = this.recados.indexOf(recado);

      this.caixaRecados.innerHTML += this.criaCartaoMensagem(
        recado.titulo, recado.mensagem, position
      );
    }

    this.botaoEventos();
  }

  novaMensagem() {
    let titulo = this.tituloInput.value;
    let mensagem = this.mensagemInput.value;

    this.tituloInput.value = "";
    this.mensagemInput.value = "";
    this.recados.push({ titulo, mensagem })

    this.criarRecados()
  }

  deletaMensagem(position) {
    this.recados.splice(position, 1);

    this.criarRecados();
  };

  criaCartaoMensagem(titulo, mensagem) {
    return `
    <div class="message-cards card text-white bg-dark m-2 col-3">
    <div class="card-header font-weight-bold">${titulo}</div>
    <div class="card-body">
      <p class="card-text">
        ${mensagem}
      </p>
    </div>
    <div class="w-100 d-flex justify-content-end pr-2 pb-2">
      <button class="btn btn-danger mr-1 botao-deletar">Deletar</button>
      <button class="btn btn-info">Editar</button>
    </div>
  </div>
  `;
  }
}

new tasklist();