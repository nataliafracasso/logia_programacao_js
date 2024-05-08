function textoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

textoNaTela('h1', 'Analisador de Números');

let valores = [ ]; 

function verificaNumero(n){ // verificando se o número está entre 1 e 100
    if(n >= 1 && n <= 100){
        return true
    } else{
        return false
    }
}

function verificaNumeroLista( n, lista){ // Verifica se o número esta na lista / valores []
    if(lista.indexOf(n) !== -1 ){// Se na lista o número for diferente de -1, é pq o número não(!) esta na lista( let valores [])
        return true
    } else{
        return false
    }
}
 
function adicionarNumero( ){ // Chama as duas functions de verificações e começa a adiconar valores na lista
    
    let numero = Number(document.querySelector('#caixa_numero').value);
    let res = document.querySelector('#res');

    
    
    if (verificaNumero(numero) && ! verificaNumeroLista(numero, valores)){ // Se o número estiver entre 1 e 100 e NÃO(!) estiver na lista, o numero vai ser adicionado a valores[]
        valores.push(numero); // Vai adicionar no array valores
        let mensagem = '';
        valores.forEach(function(valores){ // forEach, passa cada elemento dentro da array
           
            mensagem += `O valor ${valores} adicionado <br>`;

        })
        res.innerHTML = mensagem;
        document.querySelector('#botao_verifica').style.display = 'block'; // botão de verificar
    } else {
        alert( 'Valor invalido ou já se encontra na lista')
    }
    document.querySelector('#caixa_numero'). value = ''; //limpa a caixa do número    
   
}

function analisaNumero(){
    
    let maiorNumero = Math.max(...valores); // Verifica cada um dos elemetos e mostra o maior número
    let menorNumero = Math.min(...valores); // Verifica cada um dos elemetos e mostra o menor número

    let soma = 0;

    for (let i = 0; i < valores.length; i++){ //Enquanto o valor de i for menor que o comprimento do array "valores", o loop continuará sendo executado.
        soma += valores[i]  //adicionando o valor do elemento atual à soma acumulada
        // "i" ta "sendo o índice de cada elemento", assim pega gada elemento e soma 
    }
    
    let media = soma / valores.length // Meia dos valores

    // Concatena as mensagens em uma única string
    let mensagemVerifica = `Valores verificados: ${valores} <br>`;
    mensagemVerifica += `Ao todo, tem ${valores.length} números cadastrados <br>`;
    mensagemVerifica += `O maior valor informado foi  ${maiorNumero} <br>`;
    mensagemVerifica +=` O menor menor valor informado foi ${menorNumero} <br>`;
    mensagemVerifica += `A soma entre os números é ${soma} <br>`;
    mensagemVerifica += ` A média entre os valores adicionado é ${media.toFixed(2)}`

    res.innerHTML = mensagemVerifica;
    

    document.querySelector('#botao_verifica').style.display = 'none'; // Após fazer a verificação "some" o botão verificar
    valores = [];// Limpa a array para guardar os novos valores 
    
    
}  



