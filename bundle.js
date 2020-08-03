"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tasklist = function tasklist() {
  _classCallCheck(this, tasklist);

  this.tituloInput = document.getElementById('titleInput');
  this.mensagemInput = document.getElementById('messageField');
  this.adicionar = document.getElementById('bnt');
  this.caixaRecados = document.getElementById('caixa-recados'); // console.log(this.tituloInput, this.mensagemInput, this.adicionar);
};

new tasklist();
