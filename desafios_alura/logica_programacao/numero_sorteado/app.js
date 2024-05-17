function sortear(){
    let quantidadeNumeroSorteado = parseInt(document.querySelector("#quantidade").value);
    let numeroComeca = parseInt(document.querySelector("#de").value); //somente número inteiro
    let numeroTermina = parseInt(document.querySelector("#ate").value);
    let ressultado = document.querySelector("#resultado");
    ressultado.innerHTML = obterNumeroAleatorio();

   


} 

function obterNumeroAleatorio(){
    return parseInt(Math.random() * 10);

}

