
function calcprint(x, y) {

    let soma = x + y;
    let sub = x - y;
    let mult = x * y;
    let divs = x / y;
    let rest = x % y;



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