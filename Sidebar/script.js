const sidebarToggle = document.querySelector(".sidebarToggle");
const closeBtn = document.querySelector(".closeBtn");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click",(e)=>{
    sidebar.classList.toggle("showSidebar");
})
closeBtn.addEventListener("click",(e)=>{
    sidebar.classList.remove("showSidebar");
})