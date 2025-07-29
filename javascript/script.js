let displayValue = '';
let operator = '';
let numns = [];
let display = document.getElementById('display');

let somar = document.getElementById('btnPlus');
let subtrair = document.getElementById('btnMinus');
let multiplicar = document.getElementById('btnMultiply');
let dividir = document.getElementById('btnDivide');


let del = document.getElementById('del');



let botao1 = document.getElementById('btn1');
let botao2 = document.getElementById('btn2');
let botao3 = document.getElementById('btn3');
let botao4 = document.getElementById('btn4');
let botao5 = document.getElementById('btn5');
let botao6 = document.getElementById('btn6');
let botao7 = document.getElementById('btn7');
let botao8 = document.getElementById('btn8');
let botao9 = document.getElementById('btn9');
let botao0 = document.getElementById('btn0');

let igual = document.getElementById('btnEqual');
let clear = document.getElementById('btnClear');

let choice = document.getElementById('choice');

function updateDisplay(value) {
    display.value += value
}

function delDisplay() {
    display.value = display.value.slice(0, -1);
    numns.pop();
}

botao1.addEventListener('click', function() {
    updateDisplay('1');
});

botao2.addEventListener('click', function() {
    updateDisplay('2');
});

botao3.addEventListener('click', function() {
    updateDisplay('3');
});

botao4.addEventListener('click', function() {
    updateDisplay('4');
});

botao5.addEventListener('click', function() {
    updateDisplay('5');
});

botao6.addEventListener('click', function() {
    updateDisplay('6');
});

botao7.addEventListener('click', function() {
    updateDisplay('7');
});

botao8.addEventListener('click', function() {
    updateDisplay('8');
});

botao9.addEventListener('click', function() {
    updateDisplay('9');
});

botao0.addEventListener('click', function() {
    updateDisplay('0');
});


del.addEventListener('click', function() {
    delDisplay();
});


botao1.addEventListener('click', function(){
    numns.push(1)
})

botao2.addEventListener('click', function(){
    numns.push(2)
})

botao3.addEventListener('click', function(){
    numns.push(3)
})

botao4.addEventListener('click', function(){
    numns.push(4)
})

botao5.addEventListener('click', function(){
    numns.push(5)
})

botao6.addEventListener('click', function(){
    numns.push(6)
})

botao7.addEventListener('click', function(){
    numns.push(7)
})

botao8.addEventListener('click', function(){
    numns.push(8)
})

botao9.addEventListener('click', function(){
    numns.push(9)
})

botao0.addEventListener('click', function(){
    numns.push(0)
})




somar.addEventListener('click', function(){
    operator = 1;
    updateDisplay('+');
})

subtrair.addEventListener('click', function(){
    operator = 2;
    updateDisplay('-');
})

multiplicar.addEventListener('click', function(){
    operator = 3;
    updateDisplay('*');
})

dividir.addEventListener('click', function(){
    operator = 4;
    updateDisplay('/');
})


function calculate() {
        let result = eval(display.value);
        display.value = result;
        displayValue = result.toString();
}

igual.addEventListener('click', function() {
    calculate();

});

clear.addEventListener('click', function() {
    display.value = '';
})


