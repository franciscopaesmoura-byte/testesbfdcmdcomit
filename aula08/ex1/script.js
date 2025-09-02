let nume = [1, 2, 3, 2, 1]



function calcularvetor() {

    let soma = 0;
    for (let i = 0; i < nume.length; i++) {

        console.log(nume[i]);
        soma = nume[i]+soma;

        console.log(soma);

    }
    document.getElementById("result").textContent = soma;

}