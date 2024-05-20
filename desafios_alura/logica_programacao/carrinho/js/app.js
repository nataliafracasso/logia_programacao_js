let armazenaProdutos = [];
function adicionar(){
    let produto = document.querySelector('#produto').value;
    let nomeProduto = produto.split('-')[0]; // Vou separar(tirar do Fone de ouvido (-) R$100 e utilizar somente (fone de ouviod p=[0]))
    let valorUnitario = produto.split('R$')[1] //Tirar R$ e utilizar o valor, q está na posição 1
    let quantidade = document.querySelector('#quantidade').value;
    let calculoQuantidade = quantidade * valorUnitario;
   

}

function calculaNoCarrinho(){

    let res = document.getElementById('res');
}

// pegar valores, nome do produto, quantidade e valor
// calcular o preço e o subtotal
//adicionar no carrinho
// atualizar valor total da compra