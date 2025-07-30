let displayValue = '';
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

// Função para atualizar o display
function updateDisplay(value) {
    // Verifica se o último caractere no display é um operador
    let lastChar = display.value.charAt(display.value.length - 1);

    // Se o último caractere for um operador e o valor inserido também for um operador, não faz nada
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return;
    }

    display.value += value;  // Se não houver operadores consecutivos, adiciona o valor ao display
}

// Função para apagar o último caractere
function delDisplay() {
    display.value = display.value.slice(0, -1);
}

// Adiciona eventos aos botões numéricos
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

// Evento para o botão de apagar
del.addEventListener('click', function() {
    delDisplay();
});

// Adiciona eventos aos botões de operação
somar.addEventListener('click', function() {
    updateDisplay('+');
});

subtrair.addEventListener('click', function() {
    updateDisplay('-');
});

multiplicar.addEventListener('click', function() {
    updateDisplay('*');
});

dividir.addEventListener('click', function() {
    updateDisplay('/');
});

// Função para calcular o resultado
function calculate() {
    try {
        let result = eval(display.value);  // Avalia a expressão no display
        display.value = result;  // Exibe o resultado no display
        displayValue = result.toString();
    } catch (e) {
        display.value = 'Erro';  // Exibe erro se a expressão for inválida
    }
}

// Evento do botão igual
igual.addEventListener('click', function() {
    calculate();
});

// Evento do botão de limpar
clear.addEventListener('click', function() {
    display.value = '';  // Limpa o display
});
