function exibirTextoNaTela(tag, text){ // selecionou as tags do HTML, e o texto que vai ser adicionado, recebendo dois parâmetros (tag e text)
	let campo = document.querySelector(tag);
    campo.innerHTML = text; 
}

exibirTextoNaTela('h1', 'Olá Mundo' ); //Executando a função
exibirTextoNaTela('p', 'Testando '); //Executando a função
