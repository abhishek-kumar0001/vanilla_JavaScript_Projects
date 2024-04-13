const changeColorBtn = document.getElementById("changeColorBtn");
const main = document.querySelector("main");
const colorDetails = document.getElementById("colorDetails");
const navLists = document.querySelectorAll("li")
let isHexBtn = true;
let isRgbBtn = false;

changeColorBtn.addEventListener("click",(e)=>{
    console.log("call");
    setBgColor();

})
// change color logic
function randomColorUtility(getValue){
    return Math.floor(Math.random() * getValue)
}

function randomHexColor(){
    isHexBtn = true;
    isRgbBtn = false;
    const value = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E"];
    let hexColor = "#";
    for(let i = 1; i<=6 ; i++){
        hexColor += value[randomColorUtility(value.length)]
    }
    console.log(hexColor);
    console.log(isHexBtn);
    console.log(isRgbBtn);
    return hexColor;

}

function randomRgbColor(){
    isHexBtn = false;
    isRgbBtn = true;
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    console.log(rgbColor);
    console.log(isHexBtn);
    console.log(isRgbBtn);
    return rgbColor;
}

function setBgColor(){
    main.style.backgroundColor = `${isHexBtn == true || isRgbBtn == false? randomHexColor() : randomRgbColor()}`;
    colorDetails.innerText = `Color: ${isHexBtn == true || isRgbBtn == false? randomHexColor() : randomRgbColor()}`;
}

// reset logic
function resetMain(){
    main.style.backgroundColor = "#808080";
    colorDetails.innerText = " "
}

// change mode
const changeModeBtn = document.getElementById("changeModeBtn");
let mode = true;
changeModeBtn.addEventListener("click",(e)=>{
    mode ? darkMode() : lightMode();
})

function darkMode(){
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
    mode = false;
    changeModeBtn.innerText = "Light Mode";

    
}
function lightMode(){
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    mode = true;
    changeModeBtn.innerText = "Dark Mode";

}

// active class logic
navLists.forEach((elm)=>{
    elm.addEventListener("click",(e)=>{
        console.log(e.target);
        removeAllActive(elm);
        elm.classList.add("active");
    })
})
function removeAllActive(){
    navLists.forEach((elm)=>{
        elm.classList.remove("active")

    })
}