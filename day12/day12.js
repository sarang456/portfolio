let display = document.getElementById('display');
let digitButtons = document.querySelectorAll('.digit');
let operatorButtons = document.querySelectorAll('.operator');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');
let expression = '';
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        expression += button.textContent;
        display.value = expression;
    });
});
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        expression += button.getAttribute('data-operator');
        display.value = expression;
    });
});
equalsButton.addEventListener('click', () => {
    try {
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch {
        display.value = 'Error';
        expression = '';
    }
});
clearButton.addEventListener('click', () => {
    expression = '';
    display.value = '';
});