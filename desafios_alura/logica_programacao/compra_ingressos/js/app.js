function comprar(){

  let tipo = document.querySelector('#tipo-ingresso').value;
  let quantidade = Number(document.querySelector('#qtd').value);
 
 if( tipo == 'pista'){
    comprarPista(quantidade);
 } else if(tipo == 'superior'){
    compraSuperior(quantidade);
 
 }else{
    compraInferior(quantidade);
 }

 limpar();

}

function comprarPista(quantidade){

  let quantidadeFixa = Number(document.querySelector('#qtd-pista').textContent); // Pegar o texto e converter p número
  if(quantidade > quantidadeFixa){
    alert('Quantidade indisponível para tipo pista');
  } else{
    quantidadeFixa = quantidadeFixa - quantidade; // Calcular a quantidade de ingressos disponíveis 
    document.querySelector('#qtd-pista').textContent = quantidadeFixa;
    alert('Compra realizada com sucesso!');

  }
}

function compraSuperior(quantidade){

  let quantidadeFixa = Number(document.getElementById('qtd-superior').textContent);
  if(quantidade > quantidadeFixa){
    alert('Quantidade indisponível para tipo superior');
  } else{
    quantidadeFixa = quantidadeFixa - quantidade;
    document.getElementById('qtd-superior').textContent = quantidadeFixa;
    alert('Compra realizada com sucesso!');
  }

}

function compraInferior(quantidade){

  let quantidadeFixa = Number(document.querySelector('#qtd-inferior').textContent);
  if( quantidade > quantidadeFixa){
    alert('Quantidade indisponível para tipo inferior');
  } else{
    quantidadeFixa = quantidadeFixa - quantidade;
    document.getElementById('qtd-inferior'). textContent = quantidadeFixa;
    alert('Compra realizada com sucesso!');
  }
}

 
function limpar(){
  document.querySelector('#qtd').value = 0;
}

