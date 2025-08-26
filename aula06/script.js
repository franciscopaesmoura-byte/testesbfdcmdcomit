

let notas = [
    [5,6,7],
    [7,8,4],
    [9,8,9],
    [7,6,3]
]

function calcmedia(){
    const lista = document.querySelector("#tblnts");
    
    for (let i=0; i < notas.length; i++){
        let linha = document.createElement("tr");
        let nalun = document.createElement("td");
        nalun.textContent = "ALUNO: "+ (i+1);
        linha.appendChild(nalun)
        let soma = 0;

        for (let j = 0; j < notas[i].length; j++){
           let indnota = document.createElement("td");
           indnota.textContent = notas[i][j];
           linha.appendChild(indnota)
            soma += notas[i][j];
        }
    
        let media = soma / notas[i].length; 
        let mostmed = document.createElement("td");
        mostmed.textContent = media;
        linha.appendChild(mostmed)
        let situacao = document.createElement("td");
        if (media < 7) {
            situacao.textContent= "Reprovado";
            situacao.classList.add("vermelho");
        } else {
             situacao.textContent= "Aprovado";
             situacao.classList.add("blueS");
        }
        linha.appendChild(situacao)
        lista.appendChild(linha);
    }
}