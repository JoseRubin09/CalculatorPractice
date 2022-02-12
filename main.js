let buttons = document.querySelector(".container")
let displayValue
let newValue
let operator
let result
buttons.addEventListener("click", (event) => {
    let action = event.target.value;
    console.log(displayValue, operator, newValue);
    document.getElementById("text-container").innerHTML = "0";
    if (!displayValue && isNumber(action)){ 
        displayValue = action;
        document.getElementById("text-container").innerHTML = displayValue;
        return 
    }
    if (action == "C"){
        displayValue = undefined;
        newValue = undefined;
        operator = undefined;
        result = undefined;
        return 
    }
    if (displayValue && !operator && !newValue && isNumber(action) && action){
        displayValue = displayValue + action;
        document.getElementById("text-container").innerHTML = displayValue;
        return 
    }
    if (displayValue && !isNumber(action) && action != "="){
        operator = action;
        document.getElementById("text-container").innerHTML = displayValue + operator;
        return  
    }
    if (displayValue && operator && newValue && isNumber(action)){
        newValue =  newValue + action;
        document.getElementById("text-container").innerHTML = displayValue + operator + newValue;
        return  
    }
    if (displayValue && operator && isNumber(action)){
        newValue = action;
        document.getElementById("text-container").innerHTML = displayValue + operator + newValue;
        return  
    }
    if (displayValue && operator && newValue && action == "="){
        result = makeOperation(displayValue, operator, newValue, result);
        document.getElementById("text-container").innerHTML = result;
        displayValue = undefined;
        newValue = undefined;
        operator = undefined;
        result = undefined;
        return 
    }
})

function isNumber(value){
    return parseInt(value) || value == "0"
}

function makeOperation(displayValue, operator, newValue, result){
    switch (operator){
        case "x": result = displayValue * newValue;
        break;
        case "-": result = displayValue - newValue;
        break;
        case "+": result = parseInt(displayValue) + parseInt(newValue);
        break;
        case "/": result = displayValue / newValue;
        break;
    }
    return result
}

// function screenText(displayValue, operator, newValue, result){

// }
