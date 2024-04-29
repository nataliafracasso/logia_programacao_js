
function textoNaTela(tag, text){
    let texto = document.querySelector(tag);
    texto.innerHTML = text;

}
function LimpaTela(){
    document.getElementById('input'). value = "";
}
textoNaTela('h1', 'Tabuada')


function gerarTabuada( ){
    
    let numero =Number(document.querySelector('input').value);
    let res = document.getElementById('res');
    let tabuada = ''; // Armazena o número, cada vez q passa pelo for

    if( numero.length === 0){

       alert('Digite um número');

    } else if ( numero >= 0){

        for( c = 0; c <=10; c++){
            
            tabuada += `${numero} x ${c} =  ${numero*c} <br>` 

        } 

        res.innerHTML = tabuada;
        LimpaTela();
    }
   
    
}






//let numero = 2;

//for( c = 0; c <=10 ; c++){
    
   // console.log(`${numero} x ${c} =  ${numero*c}`)
//}