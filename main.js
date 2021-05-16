let num1, operator, num2;

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
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