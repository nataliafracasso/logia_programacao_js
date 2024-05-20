function alterarStatus(id){

    let jogo = document.getElementById(`game-${id}`); // concatenação 
    let imagem = jogo.querySelector('.dashboard__item__img'); // Procurando dentro da váriavel jogo a class;
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');

    alert(nomeJogo.textContent)
}


