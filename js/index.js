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
lastClick = undefined;

function operate(a, b, operator){
    if(b == ''){
        return;
    }

    switch (operator) {
        case '+':
            result = add(parseFloat(a), parseFloat(b));
            break;
        case '-':
            result = subtract(parseFloat(a), parseFloat(b));
            break;
        case 'x':
            result = multiply(parseFloat(a), parseFloat(b));
            break;
        case '÷':
            result = divide(parseFloat(a), parseFloat(b));
            break;
        case '%':
            result = modulas(parseFloat(a), parseFloat(b));
            break;
    }
    if(result != 0){
        numberOne = result;
    }
    numberTwo = '';
    operation = undefined;
    pA.innerHTML = result;
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
    if(numberOne){
        numberTwo = '';
        pA.innerHTML = '0';
    }
}

function clear(){
    numberOne = '';
    numberTwo = '';
    operation = undefined;
    pA.innerHTML = '0';
}

function inputNumber(currentNum){
    if(lastClick == `=`){
        numberOne = '';
    }

    lastClick = currentNum.className;
    if(operation === undefined){
        numberOne += currentNum.className;
        if(pA.innerHTML == '0'){
            pA.innerHTML = currentNum.className;
        }
        else if(pA.innerHTML == result){
            pA.innerHTML = currentNum.className;
        }
        else{
            pA.innerHTML += currentNum.className;
        }
    }
    else{
        numberTwo += currentNum.className;
        if(pA.innerHTML == '0'){
            pA.innerHTML = currentNum.className;
        }
        else if(pA.innerHTML == numberOne){
            pA.innerHTML = currentNum.className;
        }
        else{
            pA.innerHTML += currentNum.className;
        }
    }
}

function inputOperator(currentOperator){
    lastClick = currentOperator.className;
    if(operation){
        operate(numberOne, numberTwo, operation);
    }

    if(numberOne == ''){
        numberOne = 0;
    }

    operation = currentOperator.className;
}

dotButton.addEventListener(`click`, function(){
    inputNumber(dotButton)
});

zeroButton.addEventListener(`click`, function(){
    inputNumber(zeroButton)
});

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
    lastClick = '=';
    operate(numberOne, numberTwo, operation);
});

clearButton.addEventListener(`click`, clear);
backSpaceButton.addEventListener(`click`, backSpace);