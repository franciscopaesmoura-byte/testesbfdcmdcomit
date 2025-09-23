class retang {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
        
    }
    area(){
        return `essa é a área ${this.altura*this.largura}`;
    }
    peri(){
        return `esse é o perímetro ${2*(this.altura+this.largura)}`;
    }
}

const ret1 = new retang (10,20);
console.log(ret1.area());

console.log(ret1.peri());