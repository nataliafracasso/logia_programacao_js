function exibirTextoNaTela(tag, text){
	let campo = document.querySelector(tag);
    campo.innerHTML = text; 

}

exibirTextoNaTela('p', 'Olá Mundo' )
