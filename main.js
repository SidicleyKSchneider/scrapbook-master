class tasklist {
  constructor() {
    this.tituloInput = document.getElementById('titleInput');
    this.mensagemInput = document.getElementById('messageField');
    this.adicionar = document.getElementById('bnt');
    this.caixaRecados = document.getElementById('caixa-recados')
    this.editTexto = document.getElementById("editTitleInput")
    this.editMessagem = document.getElementById("editMessageField")
    this.salveedit = document.getElementById("saveEdit");

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

    document.querySelectorAll(".botao-editar").forEach((item) => {
      item.onclick = (event) => this.openEditModal(event);
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

    // console.log(this.recados);

    this.criarRecados();
  }

  deletaMensagem(event) {
    event.path[2].remove();

    const idRecado = event.path[2].getAttribute("id-scrap");

    const indiceRecado = this.recados.findIndex((item) => {
      return item.id == idRecado
    })

    this.recados.splice(indiceRecado, 1);
  }

  inserirHtml(html) {
    this.caixaRecados.innerHTML += html;
  }

  openEditModal(event) {
    $("#editModal").modal("toggle");

    const idRecado = event.path[2].getAttribute("id-scrap");

    const indiceRecado = this.recados.findIndex((item) => {
      return item.id == idRecado
    })
    this.editTexto.value = this.recados[indiceRecado].titulo;
    this.editMessagem.value = this.recados[indiceRecado].mensagem;

    this.salveedit.onclick = () => this.saveChanges(indiceRecado);
  }

  saveChanges(indiceRecado) {

    let titulo = this.editTexto.value;
    let mensagem = this.editMessagem.value;

    this.recados[indiceRecado] = { titulo, mensagem };
    this.criarRecados();
    $("#editModal").modal("hide");
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
    <button class="btn btn-info botao-editar">Editar</button>
    </div>
  </div>
  `;
  }
}

new tasklist();