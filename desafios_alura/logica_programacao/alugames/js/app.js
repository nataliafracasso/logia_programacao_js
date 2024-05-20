function alterarStatus(id){ // passando os id do html

    let jogo = document.getElementById(`game-${id}`); // concatenação do id game-1, game-2 e game-3
    let imagem = jogo.querySelector('.dashboard__item__img'); // Procurando dentro da váriavel jogo a class;
    let botao = jogo.querySelector('.dashboard__item__button');
    

    if(botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }

}


