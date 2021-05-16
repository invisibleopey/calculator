let num1, operator, num2;

function add (a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a,b) {
    return Number(a) / Number(b);
}

function operate (num1, operator, num2) {
    if (operator === "+") return add(num1,num2);
    if (operator === "-") return subtract(num1,num2);
    if (operator === "*") return multiply(num1,num2);
    if (operator === "/") return divide(num1,num2);
}
// Displaying Digits pressed

const display = document.querySelector("#display");
let displayValue = "";
const digitBtns = document.querySelectorAll(".digits");
digitBtns.forEach(button => button.addEventListener("click", populateDisplay));

function populateDisplay (e) {
    // console.log(e.srcElement.innerText);
    display.textContent += e.srcElement.innerText;
    displayValue = display.textContent
}

// Making the calculator work 
const operatorBtns = document.querySelectorAll(".operators");
operatorBtns.forEach(button => button.addEventListener("click", operationFunc));

function operationFunc (e) {
    // console.log(e.srcElement.innerText);
    num1 = displayValue;
    operator = e.srcElement.innerText;
    display.textContent = "";
}

const equalSign = document.querySelector("#equal");
let result;
equalSign.addEventListener("click", equalFunction);

function equalFunction () {
    num2 = displayValue;
    result = operate(num1,operator,num2);
    display.textContent = result;
}