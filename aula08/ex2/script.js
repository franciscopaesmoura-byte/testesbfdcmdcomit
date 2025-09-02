function armazenarvalores() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);
    return [num1, num2, num3, num4, num5]; 
}

function descobrirmaior() {
    let vetor = armazenarvalores(); 
    document.getElementById("result").textContent = Math.max(...vetor);
}

function descobrirmenor() {
    let vetor = armazenarvalores();
    document.getElementById("result2").textContent = Math.min(...vetor);
}