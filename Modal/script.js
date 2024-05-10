const showModalBtn = document.querySelector(".showModalBtn");
const closeBtn = document.querySelector(".closeBtn");
const modalOverlay = document.querySelector(".modalOverlay");

showModalBtn.addEventListener("click",(e)=>{
    console.log(e.target);
    modalOverlay.classList.add("openModal");
})
closeBtn.addEventListener("click",(e)=>{
    modalOverlay.classList.remove("openModal");
    console.log(e.target);
})