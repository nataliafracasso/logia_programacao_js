function alterarStatus(id){ // passando os id do html

    let jogo = document.getElementById(`game-${id}`); // concatenação do id game-1, game-2 e game-3
    let imagem = jogo.querySelector('.dashboard__item__img'); // Procurando dentro da váriavel jogo a class;
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');

  

    if(botao.classList.contains('.dashboard__item__button')){
        botao.classList.remove('.dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.remove('.dashboard__item__img');
        imagem.classList.add('dashboard__item__img--rented');
        botao.innerHTML = `Devolver`;
    } else {
        botao.classList.add('.dashboard__item__button');
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.add('.dashboard__item__img');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.innerHTML = `Alugar`;
    }

}


