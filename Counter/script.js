let value = document.getElementById("value");
let result = parseInt(value.innerText);

function getIncrease(){
    result += 1; 
    value.innerText = result;
    checkValue(result);
}
function getDecrease(){
    result -= 1; 
    value.innerText = result;
    checkValue(result);
}
function getReset(){
    result = 0; 
    value.innerText = result;
    checkValue(result);
}
function checkValue(result){
    if(result > 0){
        value.style.color = "green"
    }
    else if(result == 0){
        value.style.color = "#000000";
    }
    else{
        value.style.color = "red";

    }
}