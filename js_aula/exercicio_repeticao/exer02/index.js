function exibirTextoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}
 exibirTextoNaTela('h1', 'Vamos Contar');

function contar(){
    let primeiroNumero = document.getElementById('inicio').value;
    let segundoNumero = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    
    
    
    if(primeiroNumero === "" || segundoNumero === "" || passo === ""){
        alert('Erro. Digite todos os números')
    }  else{
        let i = Number(primeiroNumero);
        let f = Number(segundoNumero);
        let p = Number(passo);
        let res = document.getElementById('res');
        let resultado = '';

        for( let c = i; c <= f; c += p){
            resultado += `${c}`;
            res.innerHTML = `Contando: ${resultado}`;
        }
        
    }   
}
