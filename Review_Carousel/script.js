const cards = document.querySelectorAll(".card");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
let counter = 0;
cards.forEach((card,i)=>{
    card.style.left = (i* 100) + "%";
})
leftArrow.addEventListener("click",(e)=>{
    clearInterval(intervalId);
    goPrev();
})
rightArrow.addEventListener("click",(e)=>{
    clearInterval(intervalId);
    goNext();
})

function goNext(){
    counter++;
    if(counter > cards.length - 1){
        counter = 0;
    }
    slideCards()
    console.log(counter);
    
}
function goPrev(){
    counter--;
    if(counter < 0){
        counter = cards.length - 1;
    }
    slideCards()
    console.log(counter);

}

function slideCards(){
    cards.forEach((card)=>{
        card.style.transform = `translate(-${counter * 100}%)`
    })
}

const intervalId = setInterval((autoGo) => {
    goNext();
}, 5000);