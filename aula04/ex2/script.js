
function verificar (){
    let idade = Number(document.getElementById("num").value);
    let cnh = document.getElementById("box").checked;

    if ( idade >= 18 && cnh){
        document.getElementById("result").textContent = "pode dirirgir";
        document.getElementById("result").className = "verde";


    } else { 
        document.getElementById("result").textContent = "não pode dirigir";
        document.getElementById("result").className = "vermelho";
    }
}
   
