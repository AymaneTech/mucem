const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-list");
const faqItems = document.querySelectorAll(".faq-item");


// hamburger navigation
hamburger.addEventListener("click", () => {
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


// form variables
function check() {
    const form = document.getElementById("form").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;


    if (firstName === "") {
        alert("please fill name");
    } 
    else if (lastName === ""){
        alert("please fill last name");
    }
    else if (email === ""){
        alert("please fill email");
    }
    else if (phone === ""){
        alert("please fill phone");
    }
    else if (message === ""){
        alert("please fill message");
    }
    
}