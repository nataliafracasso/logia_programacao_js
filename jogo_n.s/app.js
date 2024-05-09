let numeroMax = 20;
let numeroSecreto = gerarNumeroSecreto();

function textoNaTela( tag, text){
    let campoTexto = document.querySelector(tag);
    campoTexto.innerHTML = text;
}
textoNaTela('h1', `Jogo Número Secreto`);
textoNaTela('p', `Adicone um número de 1 a ${numeroMax}`);

function verificarChute(){

    let chute = document.querySelector('#numerochute').value;
    
    if( chute == numeroSecreto ){
       textoNaTela('h1', 'Você acertou!');
    } else if( chute > numeroSecreto){
        textoNaTela('p', `O numero secreto é menor que ${chute}`)
    } else {
        textoNaTela('p', `O número secreto é maior que ${chute}`)
       }
}



function gerarNumeroSecreto(){
   return parseInt(Math.random() * 10 + 1);
}
console.log(gerarNumeroSecreto())