let notas = [];

function envsom() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    notas.push(num1);
    notas.push(num2);
    notas.push(num3);
    console.log(notas);
    calcular();
}

function calcular() {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma = notas[i] + soma;
        console.log(soma);

    }

    console.log(notas.length);
    media = soma / notas.length;
    document.getElementById("result").textContent = media;
    return media;
}


