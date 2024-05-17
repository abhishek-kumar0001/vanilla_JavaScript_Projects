const switchBtn = document.querySelector(".switchBtn");
const video = document.querySelector(".videoContainer");
switchBtn.addEventListener("click",(e)=>{
    if (!switchBtn.classList.contains("slide")){
        switchBtn.classList.add("slide");
        video.pause();
    }
    else{
        switchBtn.classList.remove("slide");
        video.play();
    }
})

// preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load",(e)=>{
    preloader.classList.add("hidePreloader");
})