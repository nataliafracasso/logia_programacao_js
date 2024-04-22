function textoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML= text;
}
textoNaTela('h1',`VERIFICADOR DE VELOCIDADE`);

function verificadorDeVelocidade(){
    let velocidade = document.querySelector('#numero');
    if(Number(velocidade.value) > 60){
        textoNaTela('p',`Você está sendo MULTADO, por excesso de velocidade!`); 
        let img = document.querySelector('.img');
        img.innerHTML = ''; //Limpa o conteúdo da atual div
        img.style.backgroundImage ="url('atencao.png')";
    }else {
        textoNaTela('p', `Sua velocidade atual é ${Number(velocidade.value)}`)
    }

    velocidade.value=('');
}



