let nomesParaSortear = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    let listaDeAmigos = document.getElementById('lista-amigos');
    
    if(nome == ''){
        alert('Informe o nome do amigo!');
    }else if(nomesParaSortear.includes(nome)){//Verificando se o nome já foi adicionado dentro do array 
        alert('Nome já adicionado!');
    }else{
        nomesParaSortear.push(nome);
        listaDeAmigos.innerHTML = nomesParaSortear;
    }

    limpar();
}

function sortear(){ // amigo sortear o próximo

    if(nomesParaSortear.length < 4){ // Se os elementos adicionados forem menor que 4 aparace o alert
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
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

function excluirAmigos(index){
    nomesParaSortear.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) { // embaralha elementos dentro do array

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizar(){
    let listaDoResultadoSorteio = document.getElementById('lista-sorteio');
    listaDoResultadoSorteio.innerHTML = '';
}

function atualizarLista(){
    let nomesAdicionadosNaLista = document.getElementById('lista-amigos');
    nomesAdicionadosNaLista.innerHTML = '';

    for( let i = 0; i < nomesParaSortear.length; i++ ){
        let paragrafo = document.createElement('p') //criar elemento;
        paragrafo.textContent = nomesParaSortear[i] //Define o conteúdo de texto do parágrafo como o nome do amigo atual.

        paragrafo.addEventListener('click', function(){ // Adiciona um evento de clique ao parágrafo.
            excluirAmigos(i); //Quando o parágrafo é clicado, chama a função excluirAmigo passando o índice i do amigo atual como argumento. Isso remove o amigo da lista.
        })

        // Adiciona o parágrafo à lista
        nomesAdicionadosNaLista.appendChild(paragrafo);
        
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




