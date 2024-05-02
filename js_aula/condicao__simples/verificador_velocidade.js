function textoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML= text;
}
textoNaTela('h1',`VERIFICADOR DE VELOCIDADE`);

function trocaImagemdeFundo(novaImagem ){
    let img = document.querySelector('.img');
    img.style.backgroundImage = novaImagem;
    img.style.backgroundPosition ="center"; //centralizar background
    img.style.backgroundSize = "80%"; //Define o tamanho da imagem do background
    
}

function verificadorDeVelocidade(){
    let velocidade = document.querySelector('#numero');
    

    if( velocidade.value == 0 ) {
        alert('Erro: digite a velocidade')
        
    }else if (Number(velocidade.value) > 60){
        textoNaTela('p',`Você está sendo MULTADO, por excesso de velocidade!`); 
        trocaImagemdeFundo("url('img/atencao.png')");
        
        
    } else {
        textoNaTela('p', `Sua velocidade atual é ${Number(velocidade.value)}km/h`); 
        trocaImagemdeFundo("url('img/carroazul.png')");
        
        
    }
     velocidade.value=('');
    
}



