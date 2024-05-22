//Valor total
precoTotal = 0;

//Limpar o valor que estava no carrinho e valor total 
document.getElementById('lista-produtos').innerHTML ='' ;
document.getElementById('valor-total').textContent ='R$';

function adicionar(){
    //selecionar os elementos
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // Separa o nome do valor e selecionar o nome
    let valorProduto = produto.split('R$')[1]; // Separa R$ do valor, selecionando valor
    let quantidade = document.getElementById('quantidade').value;

    //Calcular a quantidade 
    quantidadeDeCadaProduto = quantidade * valorProduto;

    //Passar para o html a quantidade, produtos e valor
    let carrinho = document.getElementById('lista-produtos');
    //Para mostrar o valor anterior e os novos valores, concatenação
    carrinho.innerHTML = carrinho.innerHTML +  `<section class="carrinho__produtos__produto">
    <span  class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${quantidadeDeCadaProduto}</span>
  </section>`
   
    // Calcular o valor total 
    let valorTotal = document.getElementById('valor-total');
    precoTotal = precoTotal + quantidadeDeCadaProduto;
    valorTotal.innerHTML = `R$${precoTotal}`;

    //Limpar caixa de quantidade
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    precoTotal = 0;
    document.getElementById('lista-produtos').innerHTML ='';
    document.getElementById('valor-total').textContent ='R$';
}












