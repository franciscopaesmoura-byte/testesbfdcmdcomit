"use strict";
class Calculadora {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    somar() {
        const resultado = this.numero1 + this.numero2;
        return `A soma de ${this.numero1} e ${this.numero2} é ${resultado}`;
    }
    subtrair() {
        const resultado = this.numero1 - this.numero2;
        return `A subtração de ${this.numero1} e ${this.numero2} é ${resultado}`;
    }
    multiplicar() {
        const resultado = this.numero1 * this.numero2;
        return `A multiplicação de ${this.numero1} e ${this.numero2} é ${resultado}`;
    }
    dividir() {
        if (this.numero2 == 0) {
            return "Erro: divisão por zero!";
        }
        const resultado = this.numero1 / this.numero2;
        return `A divisão de ${this.numero1} por ${this.numero2} é ${resultado}`;
    }
}
function pegarValores() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    return new Calculadora(num1, num2);
}
function somar() {
    const calc = pegarValores();
    document.getElementById("resultado").textContent = calc.somar();
}
function subtrair() {
    const calc = pegarValores();
    document.getElementById("resultado").textContent = calc.subtrair();
}
function multiplicar() {
    const calc = pegarValores();
    document.getElementById("resultado").textContent = calc.multiplicar();
}
function dividir() {
    const calc = pegarValores();
    document.getElementById("resultado").textContent = calc.dividir();
}
