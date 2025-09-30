class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa("Francisco", 25);

const botao = document.getElementById("btn") as HTMLButtonElement;
const mensagem = document.getElementById("mensagem") as HTMLParagraphElement;

botao.addEventListener("click", () => {
    mensagem.textContent = pessoa1.apresentar();
});
