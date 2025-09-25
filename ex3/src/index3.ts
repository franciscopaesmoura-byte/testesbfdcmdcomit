class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }

    desconto(valor: number): string {
        const desconto = (valor*this.preco)/100;
        const vlrfin = this.preco - desconto
        return `o produto ${this.nome} recebe o desconto de${valor} e custa agr ${vlrfin}`

    }

}

const prod1 = new Produto ("tv", 4000);
console.log(prod1.desconto(20)) 