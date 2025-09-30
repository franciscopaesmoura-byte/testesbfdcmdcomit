class ContaBancaria {
    #saldo = 0;
    constructor(nome){
        this.nome =nome;

    }
    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            return `${this.nome} você depositou ${valor} e seu saldo agr é ${this.#saldo}`
        } else {
            return `esse valor é inválido`
        }
    }
    sacar(valor){
        if (valor > this.#saldo){
        return `valor inválido pra saque`

        } else if (valor <=0){
            return `me ajude a lhe ajudar`
        } else {
            this.#saldo -= valor;
            return `${this.nome} você sacou ${valor} e seu saldo agr é ${this.#saldo}`
        }
    }
    versaldo(){
        return this.#saldo;
    }
}

const pessoa1 = new ContaBancaria("chicobelo")
console.log(pessoa1.depositar(50));    
console.log(pessoa1.sacar(30));        
console.log(pessoa1.versaldo());