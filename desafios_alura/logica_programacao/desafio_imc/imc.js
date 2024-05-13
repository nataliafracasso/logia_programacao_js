
function textoNaTela(tag, text){
    let campoDeMensagem = document.querySelector(tag);
    campoDeMensagem.innerHTML = text;
}

function primeiraMensagem(){
    textoNaTela('h1', `Calculando o IMC`);
    textoNaTela('p',`Informe seu peso e altura`);
}

primeiraMensagem();

function calcularPeso(){ 
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let res = peso/altura**2;
    
    if( peso == "" || altura == ""){
        textoNaTela('span',`Verifique os campos <br>`);
    } else{
        if( res <= 18.5 ){
        textoNaTela('p',`IMC  ${res.toFixed(2)}, está abaixo do peso`);
        } else if( res <= 24.9){
            textoNaTela('p',`IMC  ${res.toFixed(2)}, peso normal`);
        } else if ( res <= 29.9){
            textoNaTela('p',`IMC  ${res.toFixed(2)}, sobrepeso`);
        }else{
            textoNaTela('p',`IMC  ${res.toFixed(2)}, obesidade`);
        }
    }

}


       



