
function calcprint(){
    const numb1 = Number(document.getElementById("num1").value);
    const numb2 = Number(document.getElementById("num2").value);

    let soma = numb1 + numb2;
    let sub = numb1 - numb2;
    let mult = numb1*numb2;
    let divs = numb1/numb2;
    let rest = numb1%numb2;

    const resultados = document.getElementById("result");

    resultados.textContent = "soma"+ " " + soma + " " + "subtração "+sub + " multiplicação "+ mult + " divisão " + divs + "resto" + rest

    const somaht = document.getElementById("somaht");
    somaht.textContent = soma
    const subht = document.getElementById("subht");
    subht.textContent = sub
    const multht = document.getElementById("multht");
    multht.textContent = mult
    const divsht = document.getElementById("divsht");
    divsht.textContent = divs
    const restht = document.getElementById("restht");
    restht.textContent = rest

}