function MostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Parabéns! você conseguiu integrar HTML, CSS E JS"
}

function ApagarMensagem() {
    const mensagemclear = document.getElementById("mensagem");
    mensagemclear.textContent = "" 
}

function mensagemcomnome() {
    let nome = "chico";
    let sobrenome = "Paes";
    const paragrafosaudoso = document.getElementById("mensagem");

    paragrafosaudoso.textContent = " Eu sou"+ " " + nome + " " + sobrenome + " "+ "prazer!"
    
}