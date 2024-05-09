alert('Verifique se você está aprovado ou reprovado');
let nota = prompt('Digite a sua nota!');

let verificaNota = nota >= 7 ? 'aprovado' : 'reprovado';
alert(`Sua nota é ${nota}, está ${verificaNota}`);