"use strict";
class Animal {
    constructor(som) {
        this.som = som;
    }
    falar() {
        return this.som;
    }
}
class Gato extends Animal {
    constructor(som, tmbigode) {
        super(som);
        this.tmbigode = tmbigode;
    }
    falar() {
        return `Gato faz: ${this.som} (Bigode: ${this.tmbigode})`;
    }
}
class Cachorro extends Animal {
    constructor(som, tmorelha) {
        super(som);
        this.tmorelha = tmorelha;
    }
    falar() {
        return `Cachorro faz: ${this.som} (Orelha: ${this.tmorelha})`;
    }
}
const animais = [
    new Gato("Miau", "grande"),
    new Cachorro("Au Au", "caída")
];
for (const Animal of animais) {
    console.log(Animal.falar());
}
