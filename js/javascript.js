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

// Pegar a data atual do computador
let agora = new Date();
// Pegar o dia da semana em valores númericos
let diaSemana = agora.getDay();
// Pegar o ID da div
let data = document.getElementById('data');

// switch(diaSemana){
//     case 0:
//         data.innerHTML = ('Domingo');
//         data.style.background = 'black';
//     break;

//     case 1:
//         data.innerHTML = ('Segunda-feira');
//         data.style.background = 'gray';
//     break;                                                      

//     case 2:
//         data.innerHTML = ('Terça-Feira');
//         data.style.background = 'orange';
//     break;

//     case 3:
//         data.innerHTML = ('Quarta-Feira');
//         data.style.background = 'blue';
//     break;

//     case 4:
//         data.innerHTML = ('Quinta-Feira');
//         data.style.background = 'yellow';
//     break;

//     case 5:
//         data.innerHTML = ('Sexta-Feira');
//         data.style.background = 'pink';
//     break;

//     case 6:
//         data.innerHTML = ('Sábado');
//         data.style.background = 'red';
//         // console.log('Dia inválido');
//     break;

//     default:
//         console.log('Dia inválido');
//     break;
// } 

if(diaSemana == 0){
    data.innerHTML = ('Domingo');
    data.style.background = ('Black')
} else if(diaSemana == 1){
    data.innerHTML = ('Segunda-Feira');
    data.style.background = ('blue');

} else if(diaSemana == 2){
    data.innerHTML = ('Terça-Feira');
    data.style.background = ('gray');

} else if(diaSemana == 3){
    data.innerHTML = ('Quarta-Feira');
    data.style.background = ('yellow');

} else if(diaSemana == 4){
    data.innerHTML = ('Quinta-Feira');
    data.style.background = ('red');

} else if(diaSemana == 5){
    data.innerHTML = ('Sexta-Feira');
    data.style.background = ('pink');

} else if(diaSemana == 6){
    data.innerHTML = ('Sábado');
    data.style.background = ('orange');

} else {
    data.innerHTML = ('Data inválida');
    data.style.background = ('white');
    data.style.color = ('black');
}

// let contador = 0;

// while(contador < 300){
//     contador++;
//     console.log(contador);
// }

let contador = 0;
let contadorN = document.getElementById('contador');

while(contador < 300){
        contador++;
        contador.innerHTML = ('contador');
    }
    
