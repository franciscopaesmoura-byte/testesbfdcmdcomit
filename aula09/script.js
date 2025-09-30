let notas=[];
let chartSituacao, chartMedias;

function cadaluno() {
    let nome = document.getElementById("nome").value;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    notas.push({nome,num1,num2,num3});
    

    const lista = document.querySelector("#tblnts");
    let linha = document.createElement("tr");
    let nalun = document.createElement("td");
    nalun.textContent = nome.charAt(0).toUpperCase() + nome.slice(1);
    linha.appendChild(nalun);

    
        let soma = 0;
        let valores = [num1, num2, num3];
        for (let j = 0; j < valores.length; j++){
           let indnota = document.createElement("td");
           indnota.textContent = valores[j];
           linha.appendChild(indnota)
            soma += valores[j];
        }
       
        let media = soma / valores.length; 
        let mostmed = document.createElement("td");
        mostmed.textContent = media.toFixed(1);
        linha.appendChild(mostmed)


        let situacao = document.createElement("td");
        if (media < 7) {
            situacao.textContent= "Reprovado";
            situacao.classList.add("vermelho");
        } else {
             situacao.textContent= "Aprovado";
             situacao.classList.add("verde");
        }

        linha.appendChild(situacao)
        lista.appendChild(linha);


        document.getElementById("nome").value = "";
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("num3").value = "";

        atualizarGraficos();
    }
    
function atualizarGraficos() {
    // conta aprovados e reprovados
    let aprovados = notas.filter(n => ((n.num1+n.num2+n.num3)/3) >= 7).length;
    let reprovados = notas.length - aprovados;

    // destrói gráfico antigo se existir (para não duplicar)
    if (chartSituacao) chartSituacao.destroy();
    if (chartMedias) chartMedias.destroy();

    // gráfico de pizza (situação)
    const ctx1 = document.getElementById("chartSituacao");
    chartSituacao = new Chart(ctx1, {
        type: "pie",
        data: {
            labels: ["Aprovados", "Reprovados"],
            datasets: [{
                data: [aprovados, reprovados],
                backgroundColor: ["#27ae60", "#e74c3c"]
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Situação da turma"
                }
            }
        }
    });

    // gráfico de barras (médias individuais)
    const ctx2 = document.getElementById("chartMedias");
    chartMedias = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: notas.map(n => n.nome),
            datasets: [{
                label: "Média",
                data: notas.map(n => ((n.num1+n.num2+n.num3)/3).toFixed(2)),
                backgroundColor: "#3c4c8f"
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Média por aluno"
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 10
                }
            }
        }
    });
}