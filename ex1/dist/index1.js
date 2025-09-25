"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `olá, meu nome é ${this.nome} tenho ${this.idade} anos`;
    }
}
const aluno1 = new Pessoa("ana", 20);
console.log(aluno1.apresentar());
