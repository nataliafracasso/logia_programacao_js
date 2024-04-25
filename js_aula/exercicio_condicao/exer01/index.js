function textoNaTela(tag, text){ // vai receber uma tag e um texto
    let texto = document.querySelector(tag); // vai selecionar a tag no html
    texto.innerHTML= text; // a variavel vai receber um texto
}

textoNaTela('h1', 'Hora do Dia');

function formatarNumero(numero){
    return numero < 10 ? "0" + numero : numero; 
}

function mudarCordeFundo(cor){ //Recebe um parâmetro cor
    document.body.style.backgroundColor = cor; //para definir a cor de fundo do body como a cor passada como parâmetro.
}

function carregar(){
    let data = new Date(); // Construtor que contem a data e hora
    let hora = data.getHours(); // método do new date, que vai retornar a hora. 
    let min = data.getMinutes(); //método do new date, que vai retornar a min.
    let img = document.querySelector('#img');

    
    
    textoNaTela('p', `Agora são ${hora} horas e ${min}minutos`)

    if ( hora > 0 && hora <= 12){
        img.src = 'img/dia.jpg';

    } else if (hora > 12 && hora < 18){
        img.src ='img/tarde.jpg';
        mudarCordeFundo( 'var(--cor-laranja)' );
        document.querySelector('h1').style.color = "white";
    } else{
        img.src ='img/noite.jpg';
        mudarCordeFundo('var(--cor-preto)');
        document.querySelector('h1').style.color = "white";
    }

}

