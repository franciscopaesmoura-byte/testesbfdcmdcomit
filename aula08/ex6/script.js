let matriz = [[1,2,3],
          [4,5,6],]

let transposta = [[],[],[]]

function calculartransposta(){
    for (let i=0; i < matriz.length; i++){
        for (let j=0; j < matriz[i].length; j++){
            transposta[j][i] = matriz[i][j];
        }}
    console.log(transposta);
    document.getElementById("result").textContent = transposta;
    console.log(matriz);
    
}