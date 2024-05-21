let armazenaProdutos = [];
somaTotal = 1400;
function adicionar(){
    let produto = document.querySelector('#produto').value;
    let nomeProduto = produto.split('-')[0]; // Vou separar(tirar do Fone de ouvido (-) R$100 e utilizar somente (fone de ouviod p=[0]))
    let valorUnitario = produto.split('R$')[1] //Tirar R$ e utilizar o valor, q está na posição 1
    let quantidade = document.querySelector('#quantidade').value;
    let calculoQuantidade = quantidade * valorUnitario;
   
    calculaNoCarrinho(quantidade, nomeProduto, calculoQuantidade)
    total(valorUnitario);
}

function calculaNoCarrinho(quantidade, nomeProduto, calculoQuantidade){ //melhorar
    let res = document.getElementById('res');
    let calcular =`${quantidade}x ${nomeProduto} R$${calculoQuantidade}`;
    armazenaProdutos.push(calcular);
    res.innerHTML = `${armazenaProdutos} <br>`;
}



// calcular o preço e o subtotal
//adicionar no carrinho
// atualizar valor total da compra