class tasklist {
  constructor() {
    this.tituloInput = document.getElementById('titleInput');
    this.mensagemInput = document.getElementById('messageField');
    this.adicionar = document.getElementById('bnt');
    this.caixaRecados = document.getElementById('caixa-recados')

    // console.log(this.tituloInput, this.mensagemInput, this.adicionar);
  }
}

new tasklist();