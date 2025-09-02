

let notas = [
    [5,6,7,6],
    [7,8,4,7],
    [9,8,9,3],
    [6,5,4,1],
]

function calcmedia(){
    for (let i=0; i < 4; i++){
        diagprin = notas[i][i];
        console.log(diagprin);
        
    }
    document.getElementById("result").textContent = diagprin;
}