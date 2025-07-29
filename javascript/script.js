let displayValue = '';
let operator = '';

let somar = document.getElementById('btnPlus');
let subtrair = document.getElementById('btnMinus');
let multiplicar = document.getElementById('btnMultiply');
let dividir = document.getElementById('btnDivide');

let igual = document.getElementById('bntEqual');
let clear = document.getElementById('bntClear');

let choice = document.getElementById('choice');

somar.addEventListener('click', function(){
    operator = 1;
    choice.innerText = 'Operação: +';
})

subtrair.addEventListener('click', function(){
    operator = 2;
    choice.innerText = 'Operação: -';
})

multiplicar.addEventListener('click', function(){
    operator = 3;
    choice.innerText = 'Operação: *';
})

dividir.addEventListener('click', function(){
    operator = 4;
    choice.innerText = 'Operação: /';
})




