let numeroS = numeroSecreto();
let numeromax = 10;
function exibirNaTela( tag, text){
    let campoTexto = document.querySelector(tag);
    campoTexto.innerHTML = text; 
} 

function inicioDoJogo (){
    exibirNaTela('h1', `Jogo do número Secreto`);
    exibirNaTela('p', `Digite um número de 1 a 10`)
}

inicioDoJogo();


console.log( ` ESSE É O NS ${numeroS}`)

function verificarChute( ){

    let chute = document.querySelector('#chute').value;

    if(chute < 1 || chute > numeromax ){
        alert(`Digite um número de 1 a ${numeromax}`)
    } else{ 
        if ( chute == numeroS){

            exibirNaTela('h1', `Você acertou!`);
            exibirNaTela('p', `Você descobriu o número secreto, é ${numeroS}`);

        } else {
            if( chute > numeroS){
                
                exibirNaTela('p', `O número secreto e menor que ${chute}`);
            } else{
                exibirNaTela('p', `O número secreto e maior que ${chute}`);
            }

        } 
    }
    
    limpaCampo()
}

function numeroSecreto(){
    return parseInt(Math.random() * 10 + 1);
}



function limpaCampo(){
    document.querySelector('#chute').value = '';
}