// definir variável caixa
let caixa = document.getElementById('caixa');

// Adicionar eventos com o mouse na variável caixa
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

// Criar função variável clicar (Ativa quando o usuário clicar dentro da div)
function clicar() {
    caixa.innerHTML = '<strong>VOCÊ CLICOU</strong>';
    caixa.style.background = 'black';
    // caixa.style.textTransform = 'Uppercase';
    caixa.style.fontFamily = 'arial';
    caixa.style.color = 'orange';
}

// Criar função da variável entrar (Ativa quando o mouse passar dentro da div)
function entrar(){
    caixa.innerHTML = '<strong>Você Entrou</strong>';
    caixa.style.background = 'orange';
    // caixa.style.textTransform = 'uppercase';
    caixa.style.color = 'black';
    // caixa.style.fontWeight = 'black';
}

// Criar função da variável sair (ativa quando tirar o mouse dentro da div)
function sair(){
    caixa.innerHTML = '<strong>Passe o mouse</strong>';
    caixa.style.background = 'green';
    caixa.style.color = 'black';
    // caixa.style.fontWeight = 'black';
}