
let botaoSortear = document.querySelector('#btn-sortear');
let botaoReiniciar = document.querySelector('#btn-reiniciar');

function sortear(){

    let numeroSorteados = []; // quntidade de números sorteados

    let quantidadeNumeroSorteado = parseInt(document.querySelector("#quantidade").value);
    let numeroComeca = parseInt(document.querySelector("#de").value); //somente número inteiro
    let numeroTermina = parseInt(document.querySelector("#ate").value);
    
  
    
    if(isNaN(quantidadeNumeroSorteado)  || isNaN(numeroComeca) || isNaN(numeroTermina)){
        resposta(`Preencha todos os campos!`)
        botaoSortear.disabled = tru;
        botaoReiniciar.disabled = false;
    } else {
        for( let i = 0; i < quantidadeNumeroSorteado; i++){ // Equanto i for menor que quantidade vai se repetir(ter a quantidade de numeros sorteados)
            let numeroAleatorio = obterNumeroAleatorio(numeroComeca, numeroTermina); 
            while(numeroSorteados.includes(numeroAleatorio)){ // Verifica se já tem o número no array e gera outro
                numeroAleatorio = obterNumeroAleatorio(numeroComeca, numeroTermina);
            }
            numeroSorteados.push(numeroAleatorio);

        } 
        resposta(`Sorteado: ${numeroSorteados}`);
    }
  
   
} 

function obterNumeroAleatorio(min, max){ //gerar uma function que vai gerar um número aletório entre o min e max
  
    return parseInt(Math.random() * (max - min + 1)) + min;
    
}

function resposta (text){
    let res = document.getElementById('resultado');
    res.innerHTML = text
}


function reiniciar (){

    document.getElementById('quantidade'). value ='';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resposta (`Números sorteados:  nenhum até agora`);
    numeroSorteados = [];
}


