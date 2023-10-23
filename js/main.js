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
function check() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const cin = document.getElementById("cin").value;

    var cin_pattern = /^[A-Z]{1,2}[0-9]+$/;
    var email_pattern = /^[A-Za-z0-9_.]+@([a-z]+.)+[a-z]{2,3}$/;
    var phone_pattern = /^\+212[0-9]{9}$/;

    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach((error) => error.classList.remove("active"));

    if (firstName === "") {
        document.querySelector("#firstName + .error").classList.add("active");
    } else if (lastName === "") {
        document.querySelector("#lastName + .error").classList.add("active");
    } else if (email === "" || !email_pattern.test(email)) {
        document.querySelector("#email + .error").classList.add("active");
    } else if (phone === "" || !phone_pattern.test(phone)) {
        document.querySelector("#phone + .error").classList.add("active");
    } else if (cin === "" || !cin_pattern.test(cin)) {
        document.querySelector("#cin + .error").classList.add("active");
    } else if (message === "") {
        document.querySelector("#message + .error").classList.add("active");
    }
}
