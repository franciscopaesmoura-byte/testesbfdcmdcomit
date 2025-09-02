


const lista = document.getElementById("result");
function tabuada(){
    let numb1 = Number(document.getElementById("num1").value);
    lista.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li')
        let print = numb1 * i;
        li.textContent= `${numb1} x ${i} = ${print}`;
        lista.appendChild(li)
    }

}
