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
    this.caixaRecados = document.getElementById('caixa-recados'); // console.log(this.tituloInput, this.mensagemInput, this.adicionar);

    this.recados = [];
    this.registraEventoBtnAdicionar();
  }

  _createClass(tasklist, [{
    key: "registraEventoBtnAdicionar",
    value: function registraEventoBtnAdicionar() {
      var _this = this;

      this.adicionar.onclick = function () {
        return _this.novaMensagem();
      };
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
          this.caixaRecados.innerHTML += this.criaCartaoMensagem(recado.titulo, recado.mensagem);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "novaMensagem",
    value: function novaMensagem() {
      var titulo = this.tituloInput.value;
      var mensagem = this.mensagemInput.value;
      this.tituloInput.value = "";
      this.mensagemInput.value = "";
      this.recados.push({
        titulo: titulo,
        mensagem: mensagem
      });
      this.criarRecados();
    }
  }, {
    key: "criaCartaoMensagem",
    value: function criaCartaoMensagem(titulo, mensagem) {
      return "\n    <div class=\"message-cards card text-white bg-dark m-2 col-3\">\n    <div class=\"card-header font-weight-bold\">".concat(titulo, "</div>\n    <div class=\"card-body\">\n      <p class=\"card-text\">\n        ").concat(mensagem, "\n      </p>\n    </div>\n    <div class=\"w-100 d-flex justify-content-end pr-2 pb-2\">\n      <button class=\"btn btn-danger mr-1\">Apagar</button>\n      <button class=\"btn btn-info\">Editar</button>\n    </div>\n  </div>\n  ");
    }
  }]);

  return tasklist;
}();

new tasklist();
