function calcdobro(){
    let num = Number(document.getElementById("num1").value);
    let dobro = num * 2;
    document.getElementById("result").textContent = dobro;
    console.log(dobro);
}