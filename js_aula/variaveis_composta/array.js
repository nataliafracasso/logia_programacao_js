let valores = [ 1, 8, 2, 9 ]; //Uma variável composta 
valores.push(5) // Adiciona o número 5 a variável composta
console.log(valores.sort()); // ordena os elementos em ordem crescente
console.log(`A variável valores tem ${valores.length} elementos`)
for( let contador in valores){ //Para cada posição dentro do da array, vai executar o bloco
    console.log(`O índice  ${contador}  tem o valor ${valores[contador]}`);
    
}
  

/*for(contador = 0; contador < valores.length; contador++){
  console.log(`A posição ${contador}  tem o valor ${valores[contador]}`);
 //Mostra a posição dos valores (Outra forma de executar)
} */