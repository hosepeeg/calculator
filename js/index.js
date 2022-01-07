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

let numberOne = "";
let numberTwo = "";
let operation = undefined;
let result = "";

function operate(a, b, operator){
    switch (operator) {
        case '+':
            result = add(parseInt(a), parseInt(b));
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

plusButton.addEventListener(`click`, function(){
    inputOperator(plusButton)
});

equalButton.addEventListener(`click`, function(){
    operate(numberOne, numberTwo, operation);
});
