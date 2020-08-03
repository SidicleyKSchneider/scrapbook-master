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

  geraIdRecado() {
    return this.recados.length + 1;
  }

  registraEventoBtnAdicionar() {
    this.adicionar.onclick = () => this.novaMensagem();
  }

  botaoEventos() {
    document.querySelectorAll(".botao-deletar").forEach((item) => {
      item.onclick = (event) => this.deletaMensagem(event);
    });
  }

  criarRecados() {
    this.caixaRecados.innerHTML = "";

    for (const recado of this.recados) {
      const cardHtml = this.criaCartaoMensagem(
        recado.id, recado.titulo, recado.mensagem
      );

      this.inserirHtml(cardHtml);
    }

    this.botaoEventos();
  }

  novaMensagem() {
    const id = this.geraIdRecado();
    const titulo = this.tituloInput.value;
    const mensagem = this.mensagemInput.value;

    this.tituloInput.value = "";
    this.mensagemInput.value = "";

    this.recados.push({ id, titulo, mensagem })

    console.log(this.recados);

    this.criarRecados();
  }

  deletaMensagem(event) {
    event.path[2].remove();

    const idRecado = event.path[2].getAttribute("id-scrap");

    const indiceRecado = this.recados.findIndex(item => {
      return item.id == idRecado
    })

    this.recados.splice(indiceRecado, 1);
  }

  inserirHtml(html) {
    this.caixaRecados.innerHTML += html;
  }

  criaCartaoMensagem(id, titulo, mensagem) {
    return `
    <div class="message-cards card text-white bg-dark m-2 col-3 id-scrap="${id}">
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