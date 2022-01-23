"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// compatibilidade do navegador com os codigos.
// navegadores mais antigos nao tem compatibilidade com alguns recursos das novas versoes do ecmascript
// can i use -> site para verificar se o recurso utilizado ainda é compativel com os navegadores.
// babel -> transpilador para que nosso código possa ser executado em qualquer navegador. (babeljs.io)
// webpack utiliza o babel
// npm init -y -> inicia o gerenciador de pacotes do node (package.json)
// npm install --save-dev @babel/cli @babel/preset-env @babel/core -> instalar os pacotes do babel para transpilar nosso código
// babel seria uma dev dependency pois só é utilizado para desenvolvimento
// @ + numero da versao -> instala especificamente uma versao colocada apos o nome do pacote.
var nome = 'Luiz';
var obj = {
  nome: nome
};

var novoObj = _objectSpread({}, obj);

console.log(novoObj); // npx babel "nomedoarquivo" -o "arquivodesaida" --presets=@babel/env
// bundle -> arquivo de saida.
// bundle seria utilizado no index.html como arquivo de js, fazendo todos os navegadores serem compativeis com nosso codigo.
// flag -w faz o comando ficar escutando nosso codigo

var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
}); // raramente utilizamos o babel na "unha".
// mais utilizado é o webpack
