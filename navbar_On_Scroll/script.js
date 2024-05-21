//---set date---
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ---show and close links---

const navToggle = document.querySelector(".navToggle");
const closeBtn = document.querySelector(".closeBtn");
const hambarger = document.querySelector(".hambarger");
const linksContainer = document.querySelector(".linksContainer");
const links = document.querySelector(".links");

navToggle.addEventListener("click", (e)=>{
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
        linksContainer.style.marginBottom = "20px"
        closeBtn.style.display = "block";
        hambarger.style.display = "none";
    }
    else{
        linksContainer.style.height = 0;
        linksContainer.style.marginBottom = 0;
        closeBtn.style.display = "none";
        hambarger.style.display = "block";
    }
    
})


// ---fixed navbar---
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".topLink");
window.addEventListener("scroll",(e)=>{
    console.log(window.pageYOffset);
    const srcrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight);
    if(srcrollHeight > navHeight){
        navbar.classList.add("fixedNav")
    }
    else{
        navbar.classList.remove("fixedNav")
    }

    if(srcrollHeight > 500){
        topLink.classList.add("showTopLink")
    }
    else{
        topLink.classList.remove("showTopLink")
    }
})

// ---smooth scroll---
// select links
const scrollLinks = document.querySelectorAll(".scrollLink");
scrollLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        // provent defalult
        addActiveLink(e.currentTarget);
        e.preventDefault();
        // navigate to specifice spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // claculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixedNav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        
        if(navHeight > 80){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
        closeBtn.style.display = "none";
        hambarger.style.display = "block";
    })
})


function addActiveLink(targetedLink){
    scrollLinks.forEach((link)=>{
        link.classList.remove("activeLink");
        targetedLink.classList.add("activeLink")
    })
}