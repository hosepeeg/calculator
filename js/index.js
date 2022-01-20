// Creating all element selectors
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

//creating global variables
let numberOne = "";     //holds value for first number
let numberTwo = "";     //holds value for seocnd number
let operation = undefined;  //holds value for operator
let result = "";            //holds value for result of operation
lastClick = undefined;      //holds value of last clicked element (needed incase user clicks '=' program knows how to handle next given value)


//completes operation based on given operator and operands
function operate(a, b, operator){
    //if user did not enter 2nd value program will not continue until it is given
    if(b == ''){
        return;
    }

    //check the operator and complete the operation based on given values
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

    //make first number = result in case user decides to work with given result
    if(result != 0){
        numberOne = result;
    }

    //clear all other values and print result
    numberTwo = '';
    operation = undefined;
    pA.innerHTML = result;
}


//math for operators
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


//clear current working numbers value
function backSpace(){
    if(numberOne){
        numberTwo = '';
        pA.innerHTML = '0';
    }
}


//clear all stored values in calculator and start from beggining
function clear(){
    numberOne = '';
    numberTwo = '';
    operation = undefined;
    pA.innerHTML = '0';
}


//enters number into calculator
function inputNumber(currentNum){
    //if lastclick was = then number one is reset
    if(lastClick == `=`){
        numberOne = '';
    }

    //ensure multiple decimal valeus are not entered for current working number
    if(currentNum == dotButton){
        let workingNum = pA.innerHTML;
        if(workingNum.includes(`.`)){
            return;
        }
    }

    //enter number to correct number variable
    lastClick = currentNum.className;
    if(operation === undefined){
        numberOne += currentNum.className;
        if(pA.innerHTML == '0'){
            pA.innerHTML = currentNum.className;
        }
        else if(pA.innerHTML == 'NaN'){
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
        else if(pA.innerHTML == 'NaN'){
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

//select operator for operation
function inputOperator(currentOperator){
    lastClick = currentOperator.className;
    //if an operator has already been entered compute
    if(operation){
        operate(numberOne, numberTwo, operation);
    }

    //if there was no value entered for first number, make it 0
    if(numberOne == ''){
        numberOne = 0;
    }

    operation = currentOperator.className;
}


//Event handlers for buttons
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