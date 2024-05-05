const links = document.querySelector(".links");
const navToggle = document.querySelector(".navToggle");
const closeIcon = document.querySelector(".closeIcon");
const hamburger = document.querySelector(".hamburger");

navToggle.addEventListener("click",(e)=>{
    console.log(e.target);
    links.classList.toggle("showLinks");
    if(links.classList.contains("showLinks")){
        closeIcon.style.display = "block";
        hamburger.style.display = "none";
    }
    else{
        closeIcon.style.display = "none";
        hamburger.style.display = "block";
    }
    
})
