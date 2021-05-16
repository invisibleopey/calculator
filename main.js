const display = document.querySelector("#display");
const digitBtns = document.querySelectorAll(".digits");
const operatorBtns = document.querySelectorAll(".operators");
const equalSignBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const decimalBtn = document.querySelector("#decimal");

let operand1 = "";
let operand2 = "";
let operator = null;
let displayValue = display.textContent;
// Event listeners
digitBtns.forEach(button => button.addEventListener("click", populateDisplay));
operatorBtns.forEach(button => button.addEventListener("click", selectOperator));
equalSignBtn.addEventListener("click", findResult);
clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deleteNumber);
decimalBtn.addEventListener("click", insertDecimal);

// Functions for handling the mathematical operations
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

function populateDisplay (e) {
    if (displayValue === "0" || displayValue === operand1) {
        displayValue = e.srcElement.innerText;
    } else {
        displayValue += e.srcElement.innerText;
    }
    display.textContent = displayValue;
}

function selectOperator (e) {
    if (operator !== null ) {
        findResult();
    }
        operand1 = displayValue;
        operator = e.srcElement.innerText;
}

function findResult () {
    if (operator === null) {
        display.textContent = displayValue;
        return;
    }
    if (operator === "/" && displayValue === "0") {
        clear();
        return alert("You can not divide by zero!")
    }
    operand2 = displayValue;
    displayValue = Math.round(operate(operand1,operator,operand2) * 100) / 100 
    display.textContent = displayValue;
    operator = null;
}

function clear() {
    displayValue = "0";
    display.textContent = "0";
    operand1 = "";
    operand2 = "";
    operator = null;
}

function deleteNumber() {
    display.textContent = display.textContent.toString().slice(0, -1);
    // Set the new displayValue to the new text in case want to use it for operation
    displayValue = display.textContent;
    operator = null;
}

function insertDecimal (e) {
    if (display.textContent.includes(".")) return
    populateDisplay(e);
}