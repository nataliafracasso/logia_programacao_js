let nomesParaSortear = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    let listaDeAmigos = document.getElementById('lista-amigos');
    
    if(nome == ''){
        alert('Digite os nomes');
    }else{
        nomesParaSortear.push(nome);
        listaDeAmigos.innerHTML = nomesParaSortear;
    }
    limpar();
}

function sortear(){ // amigo sortear o próximo

    embaralha(nomesParaSortear);
    let sortearAmigo = document.getElementById('lista-sorteio');

    //O i precisa ser menor que o índice do array 
    for(i = 0; i < nomesParaSortear.length; i++){ // Vai repetir enquanto i for menor que os elementos do array

        if( i == nomesParaSortear.length -1){ //Se i for igual ao último índice(nome)

            //Pegar o último nome e "juntar" com o primeiro índice[0]
            sortearAmigo.innerHTML = sortearAmigo.innerHTML + nomesParaSortear[i] + '-->' + nomesParaSortear[0] + '<br>';

        } else{
            //Se não, junta com o próximo nome índice(lembrando que os nomes foram embaralhados)
            sortearAmigo.innerHTML = sortearAmigo.innerHTML + nomesParaSortear[i] + '-->' + nomesParaSortear[ i + 1] + '<br>';
        }
      
    }
}

function embaralha(lista) { // embaralha elementos dentro do array

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    nomesParaSortear = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}
function limpar(){
    document.getElementById('nome-amigo').value = '';
}




//mostrar os nomes 
//cruzar os nomes