class carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes(){
        return `carro: ${this.marca} ${this.modelo} ${this.ano}`;
    }
}

const carro1 = new carro ("ford", "mustang", 2022);
console.log(carro1.detalhes());
const carro2 = new carro ("volkswagen", "up", 2024);
console.log(carro2.detalhes());
