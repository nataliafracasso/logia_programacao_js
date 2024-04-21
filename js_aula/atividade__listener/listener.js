let caixa = document.getElementById('mouse');
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa. addEventListener('mouseout', sair);

function clicar(){
    caixa.innerHTML = 'Clicou!';
}

function entrar(){
    caixa.innerHTML = 'Entrou!';
}

function sair(){
    caixa.innerHTML = 'saiu!';
}

