let operand1 = "";
let operand2 = "";
let operator = null;
let result = null;

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

function operate (operand1, operator, operand2) {
    if (operator === "+") return add(operand1,operand2);
    if (operator === "-") return subtract(operand1,operand2);
    if (operator === "*") return multiply(operand1,operand2);
    if (operator === "/") return divide(operand1,operand2);
}
// Displaying Digits pressed

const display = document.querySelector("#display span");
const digitBtns = document.querySelectorAll(".digits");

let displayValue = display.textContent;
digitBtns.forEach(button => button.addEventListener("click", populateDisplay));

function populateDisplay (e) {
    if (displayValue === "0" || displayValue === operand1) {
        displayValue = e.srcElement.innerText;
    } else {
        displayValue += e.srcElement.innerText;
    }
    // console.log(e.srcElement.innerText);
    // displayValue = display.textContent
    display.textContent = displayValue;
}

// Making the calculator work 
const operatorBtns = document.querySelectorAll(".operators");
operatorBtns.forEach(button => button.addEventListener("click", operationFunc));

function operationFunc (e) {
    // console.log(e.srcElement.innerText);
    if (operator !== null ) {
        findResult();
    }
        operand1 = displayValue;
        operator = e.srcElement.innerText;
        screen.textContent = ""

    // }
    // num1 = displayValue;
    // display.textContent = "0";
}

const equalSign = document.querySelector("#equal");
equalSign.addEventListener("click", findResult);

function findResult () {
    operand2 = displayValue;
    displayValue = Math.round(operate(operand1,operator,operand2) * 100) / 100 
    display.textContent = displayValue;
    operator = null;
}

