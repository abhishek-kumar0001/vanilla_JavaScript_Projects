const questions = document.querySelectorAll(".question");

questions.forEach((question)=>{
    question.addEventListener("click",(e)=>{
        console.log(e.currentTarget.parentElement.parentElement);
        const question = e.currentTarget;
        question.classList.toggle("showAnswer");

    })
})
