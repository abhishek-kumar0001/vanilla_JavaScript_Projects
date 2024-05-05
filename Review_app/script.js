const reviews = [
    {   
        id:1,
        img:"https://randomuser.me/api/portraits/men/47.jpg",
        name:"Jhon William",
        job: "Web Developer",
        text:"Hello I am a Web Developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere pariatur deleniti, eaque commodi hic?"
    },
    {   
        id:2,
        img:"https://randomuser.me/api/portraits/men/44.jpg",
        name:"James Watson",
        job: "App Developer",
        text:"Hello I am an App Developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere pariatur deleniti, eaque commodi hic?"
    },
    {   
        id:3,
        img:"https://randomuser.me/api/portraits/women/87.jpg",
        name:"Sophia jack",
        job: "UI/UX Designer",
        text:"Hello I am an UI/UX Designer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere pariatur deleniti, eaque commodi hic?"
    },
    {   
        id:4,
        img:"https://randomuser.me/api/portraits/men/77.jpg",
        name:"Rahul Rana",
        job: "Frontend Developer",
        text:"Hello I am a Frontend Developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere pariatur deleniti, eaque commodi hic?"
    },
]

const author = document.getElementById("name");
const job = document.getElementById("job");
const content = document.getElementById("content");
const profileImg = document.querySelector(".profileImg");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const randomBtn = document.getElementById("randomBtn");

// set starting item
let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded",(e)=>{
    showPerson();
})

// show person based on item
function showPerson(){
    const item = reviews[currentItem];
    profileImg.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    content.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click",(e)=>{
    currentItem++;
    if (currentItem > reviews.length-1) {
        currentItem = 0;
    }
    showPerson();
})

// show prev person
prevBtn.addEventListener("click",(e)=>{
    if (currentItem < 0) {
        currentItem = reviews.length-1;
    }
    currentItem--;
    showPerson();
})

// show random person
randomBtn.addEventListener("click",(e)=>{
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})

