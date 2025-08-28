function saudacao(nome) {
    document.getElementById("result").textContent = "seja bem vindo lindo" + nome;
}


function dobro(x) {
    let numero = Number(x)
    if (isNaN(x)) {
        document.getElementById("result2").textContent = "digite um número pelo amor da glória";

    } else {
        document.getElementById("result2").textContent = "o dobro de " + numero + " é " + numero * 2;
    }
}