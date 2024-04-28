function exibirTextoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}
 exibirTextoNaTela('h1', 'Vamos Contar');

function contar(){

    let primeiroNumero = document.getElementById('inicio').value;
    let segundoNumero = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value
    
    if(Number(primeiroNumero.length) === 0 || Number(segundoNumero.length) === 0 || Number(passo.length) === 0 ){
        alert('[Erro] Faltam dados!')
    }else{
        let i = Number(primeiroNumero);
        let f = Number(segundoNumero);
        let p = Number(passo);
        
        for(let c = i ; c <= f; c += p ){

            exibirTextoNaTela('p:nth-of-type(4)', `Contando: ${c}`);

        }
        
    }
    
}

