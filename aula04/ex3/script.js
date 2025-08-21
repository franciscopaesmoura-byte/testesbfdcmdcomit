
function calcprint(){
    const numb1 = Number(document.getElementById("num1").value);
    const numb2 = Number(document.getElementById("num2").value);
    if (numb1 > numb2){
        document.getElementById("result").textContent = numb1;
        document.getElementById("result").className = "verde";
    } else if (numb2>numb1 ) {
        document.getElementById("result").textContent = numb2;
        document.getElementById("result").className = "verde";
    } else{
        document.getElementById("result").textContent = "eles são iguais";
        document.getElementById("result").className = "verde";
    }
  
}