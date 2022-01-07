const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const modulasButton = document.getElementById("modulasButton");
const clearButton = document.getElementById("clearButton");
const backSpaceButton = document.getElementById("backSpaceButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const zeroButton = document.getElementById("zeroButton");
const dotButton = document.getElementById("dotButton");
const equalButton = document.getElementById("equalButton");
const pA = document.querySelector(".a");

let numberOne = "";
let numberTwo = "";
let operation = undefined;
let result = "";

function operate(a, b, operator){
    switch (operator) {
        case '+':
            result = add(parseInt(a), parseInt(b));
            break;
        case '-':
            result = subtract(parseInt(a), parseInt(b));
            break;
        case 'x':
            result = multiply(parseInt(a), parseInt(b));
            break;
        case '÷':
            result = divide(parseInt(a), parseInt(b));
            break;
        case '%':
            result = modulas(parseInt(a), parseInt(b));
            break;
    }
}

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function modulas(a, b){
    return a%b;
}

function backSpace(){

}

function clear(){

}

function inputNumber(currentNum){

    if(operation === undefined){
        numberOne += currentNum.className;
        pA.innerHTML += currentNum.className;
    }
    else{
        numberTwo += currentNum.className;
    }
}

function inputOperator(currentOperator){
    operation = currentOperator.className;
}

oneButton.addEventListener(`click`, function(){
    inputNumber(oneButton)
});

twoButton.addEventListener(`click`, function(){
    inputNumber(twoButton)
});

threeButton.addEventListener(`click`, function(){
    inputNumber(threeButton)
});

fourButton.addEventListener(`click`, function(){
    inputNumber(fourButton)
});

fiveButton.addEventListener(`click`, function(){
    inputNumber(fiveButton)
});

sixButton.addEventListener(`click`, function(){
    inputNumber(sixButton)
});

sevenButton.addEventListener(`click`, function(){
    inputNumber(sevenButton)
});

eightButton.addEventListener(`click`, function(){
    inputNumber(eightButton)
});

nineButton.addEventListener(`click`, function(){
    inputNumber(nineButton)
});

plusButton.addEventListener(`click`, function(){
    inputOperator(plusButton)
});

subtractButton.addEventListener(`click`, function(){
    inputOperator(subtractButton)
});

multiplyButton.addEventListener(`click`, function(){
    inputOperator(multiplyButton)
});

divideButton.addEventListener(`click`, function(){
    inputOperator(divideButton)
});

modulasButton.addEventListener(`click`, function(){
    inputOperator(modulasButton)
});

equalButton.addEventListener(`click`, function(){
    operate(numberOne, numberTwo, operation);
});
