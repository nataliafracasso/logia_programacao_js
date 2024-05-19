
function sortear(){

    let numeroSorteados = []; // quntidade de números sorteados

    let quantidadeNumeroSorteado = parseInt(document.querySelector("#quantidade").value);
    let numeroComeca = parseInt(document.querySelector("#de").value); //somente número inteiro
    let numeroTermina = parseInt(document.querySelector("#ate").value);
    
  
    
    if(isNaN(quantidadeNumeroSorteado)  || isNaN(numeroComeca) || isNaN(numeroTermina)){
        resposta(`Preencha todos os campos!`)
    } else {
        for( let i = 0; i < quantidadeNumeroSorteado; i++){ // Equanto i for menor que quantidade vai se repetir(ter a quantidade de numeros sorteados)
            let numeroAleatorio = obterNumeroAleatorio(numeroComeca, numeroTermina); 
            while(numeroSorteados.includes(numeroAleatorio)){ // Verifica se já tem o número no array e gera outro
                numeroAleatorio = obterNumeroAleatorio(numeroComeca, numeroTermina);
            }
            numeroSorteados.push(numeroAleatorio);

        } 
        resposta(`Sorteado: ${numeroSorteados}`);
        configurarBotao()
    }
  
   
} 

function obterNumeroAleatorio(min, max){ //gerar uma function que vai gerar um número aletório entre o min e max
  
    return parseInt(Math.random() * (max - min + 1)) + min;
    
}

function resposta (text){
    let res = document.getElementById('resultado');
    res.innerHTML = text
}

function configurarBotao(){ //Verifica a class /configuração no css
    let botaoReiniciar = document.querySelector('#btn-reiniciar');
    let botaoSortear = document.querySelector('#btn-sortear');

    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){ 

        botaoReiniciar.disabled = false; //habilitar
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');

        botaoSortear.disabled = true; //desabilitar
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');

    } else {

        botaoSortear.disabled = false; //habilitar
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao')

        botaoReiniciar.disabled = true; //desabilitar
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar (){

    document.getElementById('quantidade'). value ='';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resposta (`Números sorteados:  nenhum até agora`);
    numeroSorteados = [];
    configurarBotao()
}


