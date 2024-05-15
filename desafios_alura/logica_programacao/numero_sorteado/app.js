function sortear(){
    let quantidadeNumeroSorteado = Number(document.querySelector("#quantidade").value);
    let numeroComeca = Number(document.querySelector("#de").value);
    let numeromaximo = Number(document.querySelector("#ate").value);
    let ressultado = document.querySelector("#resultado");

    gerarNumeroSorteado()


} 

function gerarNumeroSorteado(){
    return parseInt(Math.random() * 10);

}

