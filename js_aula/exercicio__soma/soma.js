function exibirTexto(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}
exibirTexto('h1', 'VAMOS SOMAR');
function limparCampo(){
    document.getElementById('numero1').value = ""; //limpar campo
    document.getElementById('numero2').value = ""; //limpar campo 
}
function somar(){
    let n1 = document.getElementById('numero1');
    let n2 = document.getElementById ('numero2');
    let soma = Number(n1.value) + Number(n2.value);
    if(Number.isInteger(soma)){
         exibirTexto('p',  `A soma entre o número ${n1.value} e o número ${n2.value} é ${soma} `);
    }else{
        exibirTexto('p',  `A soma entre o número ${n1.value} e o número ${n2.value} é ${parseFloat(soma.toFixed(2))} `);
    }
   
    limparCampo()//chamando a função
}




