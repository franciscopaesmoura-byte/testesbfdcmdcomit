function calcularparouimpar() {
    let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    document.getElementById("result").textContent = `Pares: ${pares}, Ímpares: ${impares}`;
}