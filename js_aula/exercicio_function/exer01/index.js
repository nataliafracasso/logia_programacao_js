function textoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

textoNaTela('h1', 'Analisador de Números');

let numero = Number(document.querySelector('#caixa_numero').value);
let res = document.querySelector('#res');
let valores = [];

function verificaNumero(n){ // verificando se o número está entre 1 e 100
    if(n >= 1 && n <= 100){
        return true
    } else{
        return false
    }
}

function verificaNumeroLista( n, lista){ // Verifica se o número esta na lista / valores []
    if(lista.indexOf( n != -1) ){// Se na lista o número for diferente de -1, é pq o número não esta na lista( let valores [])
        return true
    } else{
        return false
    }
}
 function adicionarNumero( ){
    if (verificaNumero(numero) && !verificaNumeroLista(numero, valores)){
        alert('tudo ok')
    } else {
        alert( 'Valor invalido ou já se encontra na lista')
    }
 }