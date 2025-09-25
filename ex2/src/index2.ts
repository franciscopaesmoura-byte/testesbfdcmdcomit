class Animal {
    som: string;

    constructor(som: string) {
        this.som = som;
    }

    falar(): string {
        return this.som;
    }
}

class Gato extends Animal {
    tmbigode: string;

    constructor(som: string, tmbigode: string) {
        super(som);
        this.tmbigode = tmbigode;
    }

    falar(): string {
        return `Gato faz: ${this.som} (Bigode: ${this.tmbigode})`;
    }
}

class Cachorro extends Animal {
    tmorelha: string;

    constructor(som: string, tmorelha: string) {
        super(som);
        this.tmorelha = tmorelha;
    }

    falar(): string {
        return `Cachorro faz: ${this.som} (Orelha: ${this.tmorelha})`;
    }
}

const animais: Animal[] = [
    new Gato("Miau", "grande"),
    new Cachorro("Au Au", "caída")
];

for (const Animal of animais){
    console.log (Animal.falar());

}