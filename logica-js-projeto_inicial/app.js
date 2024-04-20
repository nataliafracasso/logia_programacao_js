
alert('Seja bem vindo ao jogo descubra o número secreto!');
let numeromaximo= 100; // número máximo do jogo
let numerosecreto = parseInt(Math.random()* numeromaximo +1);
let chute;
// Um espaço/ caixa para o número do usuário
let tentativas = 1; //começa começa com uma tentaiva


// Enquanto o chute não for igual ao número secreto, vai repetir
while( chute != numerosecreto){
     
    chute= prompt(`Para descobrir o número, digite um número de 1 a ${numeromaximo}.`);
    //Valor do chute, que o usuário vai escolher

    if (chute == numerosecreto) { //Se o número que o usuário digitar(chute) for igual a 5(número), vai aparecer a mensagem a baixo
       break; //Se a pessoa acertar o número de tentativas, vai executar o if (tentativa singular/plural)
    } else {
        if (chute > numerosecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
       // tentativas = tentativas +1; (Vais somar os números de tentaivas, tanto a que acerto quanto as erradas)
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//Caso tentativa seja maior que um, vai ser utilizado a palavtra tentativas, se não, vai ser utilizado tentativa
alert(`Isso ai! Você descobriu, o número secreto é ${numerosecreto} com ${tentativas} ${palavraTentativa} `);
    



