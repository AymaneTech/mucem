const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-list");
const faqItems = document.querySelectorAll(".faq-item");


// hamburger navigation
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// faq 

faqItems.forEach((item) => {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");

    question.addEventListener("click", () => {
        answer.classList.toggle("active");
    });
});
