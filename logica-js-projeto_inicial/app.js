alert('Seja bem vindo ao jogo descubra o número secreto!');
let numerosecreto = 9;
console.log(numerosecreto) // Aparece no console o valor do número secreto
let chute = prompt('Para descobrir o número, digite um número de 1 a 10. ')

if(chute == numerosecreto){ //Se o número que o usuário digitar(chute) for igual a 5(número), vai aparecer a mensagem a baixo
    alert(`Parabéns! Você acertou, o número é ${numerosecreto}`);
}else{
    alert('Tente novamente!')
}