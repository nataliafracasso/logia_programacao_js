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
        document.querySelector('#botao_verifica').style.display = 'block';    
    } else {
        alert( 'Valor invalido ou já se encontra na lista')
    }
    document.querySelector('#caixa_numero'). value = ''; //limpa a caixa do número    
}

function analisaNumero(){
    res.innerHTML = ''; // "Apaga" os valores adicionados p aparecer outro resultado
    res.innerHTML = `Ao todo, tem ${valores.length} números cadastrados`;
    res.innerHTML = ` A soma total é ${numero + valores.push(numero)}`;
}