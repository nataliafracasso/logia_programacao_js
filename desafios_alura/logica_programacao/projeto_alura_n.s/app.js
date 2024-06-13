let listaDeNumeroSorteados = [];
let numeromax = 10;
let numeroS = gerarNumeroSecreto();
let tentativas = 1;


function exibirNaTela( tag, text){
    let campoTexto = document.querySelector(tag);
    campoTexto.innerHTML = text; 
} 

function inicioDoJogo (){
    exibirNaTela('h1', `Jogo do número Secreto`);
    exibirNaTela('p', `Digite um número de 1 a 10`)
}

inicioDoJogo();

function verificarChute( ){

    let chute = document.querySelector('#chute').value;

        if(chute < 1 || chute > numeromax ){
            alert(`Digite um número de 1 a ${numeromax}`);
            limpaCampo();
        } else{ 
            if ( chute == numeroS){

                let mensagemComTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
                exibirNaTela('h1', `Você acertou!`);
                exibirNaTela('p', `Você descobriu o número secreto com ${tentativas} ${mensagemComTentativas}`);
                document.getElementById('reiniciar').removeAttribute('disabled'); //Quando o usuário ganhar, vou desabilitar esse atributo do botão(novo jogo), ativando o mesmo. 

            } else {
                if( chute > numeroS){  
                
                    exibirNaTela('p', `O número secreto e menor que ${chute}`);
                } else{
                    exibirNaTela('p', `O número secreto e maior que ${chute}`);
                }
                tentativas++ // toda vez que o usuário realiza uma tentativa(verificarChute()) incrementa 1. 
                limpaCampo() ;// só vai apagar o número da caixa, enquanto a pessoa errar
            }
        }

}

function gerarNumeroSecreto(){

    // Gera o número secreto com objetivo do número não se repetir ...
    let numeroEscolhido = parseInt(Math.random() * numeromax + 1); //Armazena o numero aleatório
    let quantidadeDeElementosNoVetor = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNoVetor == numeromax){ // Todos os números já foram sorteados, precisa limpar a array e começar novamente.
        listaDeNumeroSorteados = []
    }
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        // Caso o numero já esteja na lista vai return/ gerar um novo número aleatório / INCLUSE - verifica se o núemero esta dentro da array
        return gerarNumeroSecreto()// RECURSÃO

    } else{ //Se nao está na lista, vai retornar o número escolhido
        listaDeNumeroSorteados.push(numeroEscolhido) // Armazenando no array o numero escolhido
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido
    }
}

function limpaCampo(){
    document.querySelector('#chute').value = '';
}

function botaoNovoJogo(){
    numeroS = gerarNumeroSecreto(); //Precisa armazenar o novo número.
    limpaCampo();
    tentativas = 1;
    inicioDoJogo();  
    document.getElementById('reiniciar').setAttribute('disabled', true); //Quando o usuário iniciar uma nova roda, desabilitar o botão(novo jogo). 
}
