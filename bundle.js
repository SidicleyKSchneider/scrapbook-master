"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var tasklist = /*#__PURE__*/function () {
  function tasklist() {
    _classCallCheck(this, tasklist);

    this.tituloInput = document.getElementById('titleInput');
    this.mensagemInput = document.getElementById('messageField');
    this.adicionar = document.getElementById('bnt');
    this.caixaRecados = document.getElementById('caixa-recados');
    this.editTexto = document.getElementById("editTitleInput");
    this.editMessagem = document.getElementById("editMessageField");
    this.salveedit = document.getElementById("saveEdit"); // console.log(this.tituloInput, this.mensagemInput, this.adicionar);

    this.recados = [];
    this.registraEventoBtnAdicionar();
  }

  _createClass(tasklist, [{
    key: "geraIdRecado",
    value: function geraIdRecado() {
      return this.recados.length + 1;
    }
  }, {
    key: "registraEventoBtnAdicionar",
    value: function registraEventoBtnAdicionar() {
      var _this = this;

      this.adicionar.onclick = function () {
        return _this.novaMensagem();
      };
    }
  }, {
    key: "botaoEventos",
    value: function botaoEventos() {
      var _this2 = this;

      document.querySelectorAll(".botao-deletar").forEach(function (item) {
        item.onclick = function (event) {
          return _this2.deletaMensagem(event);
        };
      });
      document.querySelectorAll(".botao-editar").forEach(function (item) {
        item.onclick = function (event) {
          return _this2.openEditModal(event);
        };
      });
    }
  }, {
    key: "criarRecados",
    value: function criarRecados() {
      this.caixaRecados.innerHTML = "";

      var _iterator = _createForOfIteratorHelper(this.recados),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var recado = _step.value;
          var cardHtml = this.criaCartaoMensagem(recado.id, recado.titulo, recado.mensagem);
          this.inserirHtml(cardHtml);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.botaoEventos();
    }
  }, {
    key: "novaMensagem",
    value: function novaMensagem() {
      var id = this.geraIdRecado();
      var titulo = this.tituloInput.value;
      var mensagem = this.mensagemInput.value;
      this.tituloInput.value = "";
      this.mensagemInput.value = "";
      this.recados.push({
        id: id,
        titulo: titulo,
        mensagem: mensagem
      }); // console.log(this.recados);

      this.criarRecados();
    }
  }, {
    key: "deletaMensagem",
    value: function deletaMensagem(event) {
      event.path[2].remove();
      var idRecado = event.path[2].getAttribute("id-scrap");
      var indiceRecado = this.recados.findIndex(function (item) {
        return item.id == idRecado;
      });
      this.recados.splice(indiceRecado, 1);
    }
  }, {
    key: "inserirHtml",
    value: function inserirHtml(html) {
      this.caixaRecados.innerHTML += html;
    }
  }, {
    key: "openEditModal",
    value: function openEditModal(event) {
      var _this3 = this;

      $("#editModal").modal("toggle");
      var idRecado = event.path[2].getAttribute("id-scrap");
      var indiceRecado = this.recados.findIndex(function (item) {
        return item.id == idRecado;
      });
      this.editTexto.value = this.recados[indiceRecado].titulo;
      this.editMessagem.value = this.recados[indiceRecado].mensagem;

      this.salveedit.onclick = function () {
        return _this3.saveChanges(indiceRecado);
      };
    }
  }, {
    key: "saveChanges",
    value: function saveChanges(indiceRecado) {
      var titulo = this.editTexto.value;
      var mensagem = this.editMessagem.value;
      this.recados[indiceRecado] = {
        titulo: titulo,
        mensagem: mensagem
      };
      this.criarRecados();
      $("#editModal").modal("hide");
    }
  }, {
    key: "criaCartaoMensagem",
    value: function criaCartaoMensagem(id, titulo, mensagem) {
      return "\n    <div class=\"message-cards card text-white bg-dark m-2 col-3 id-scrap=\"".concat(id, "\">\n    <div class=\"card-header font-weight-bold\">").concat(titulo, "</div>\n    <div class=\"card-body\">\n      <p class=\"card-text\">\n        ").concat(mensagem, "\n      </p>\n    </div>\n    <div class=\"w-100 d-flex justify-content-end pr-2 pb-2\">\n      <button class=\"btn btn-danger mr-1 botao-deletar\">Deletar</button>\n    <button class=\"btn btn-info botao-editar\">Editar</button>\n    </div>\n  </div>\n  ");
    }
  }]);

  return tasklist;
}();

new tasklist();
