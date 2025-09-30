class Calculadora {
    numero1: number;
    numero2: number;

    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    somar(): string {
        const resultado = this.numero1 + this.numero2;
        return `A soma de ${this.numero1} e ${this.numero2} é ${resultado}`;
    }

    subtrair(): string {
        const resultado = this.numero1 - this.numero2;
        return `A subtração de ${this.numero1} e ${this.numero2} é ${resultado}`;
    }

    multiplicar(): string {
        const resultado = this.numero1 * this.numero2;
        return `A multiplicação de ${this.numero1} e ${this.numero2} é ${resultado}`;
    }

    dividir(): string {
        if (this.numero2 == 0) {
            return "Erro: divisão por zero!";
        }
        const resultado = this.numero1 / this.numero2;
        return `A divisão de ${this.numero1} por ${this.numero2} é ${resultado}`;
    }
}




function pegarValores(): Calculadora {
    const num1 = Number((document.getElementById("num1") as HTMLInputElement).value);
    const num2 = Number((document.getElementById("num2") as HTMLInputElement).value);
    return new Calculadora(num1, num2);
}

function somar() {
    const calc = pegarValores();
    (document.getElementById("resultado") as HTMLElement).textContent = calc.somar();
}

function subtrair() {
    const calc = pegarValores();
    (document.getElementById("resultado") as HTMLElement).textContent = calc.subtrair();
}

function multiplicar() {
    const calc = pegarValores();
    (document.getElementById("resultado") as HTMLElement).textContent = calc.multiplicar();
}

function dividir() {
    const calc = pegarValores();
    (document.getElementById("resultado") as HTMLElement).textContent = calc.dividir();
}