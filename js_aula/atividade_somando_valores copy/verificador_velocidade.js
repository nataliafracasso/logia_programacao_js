function textoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML= text;
}
textoNaTela('h1',`VERIFICADOR DE VELOCIDADE`);

function verificadorDeVelocidade(){
    let velocidade = document.querySelector('#numero');
    if(Number(velocidade.value) > 60){
        textoNaTela('p',`Você está sendo MULTADO, por excesso de velocidade!`); 
    }else {
        textoNaTela('p', `Sua velocidade atual é ${Number(velocidade.value)}`)
        var img = document.querySelector('.img');
    }

    velocidade.value=('');
}



