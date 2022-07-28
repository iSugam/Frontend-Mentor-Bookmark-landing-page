import feature_CONTENT from "./features.js" // Importing all the contents from features.js

const select = selector => document.querySelector(selector); // Select SINGLE ELEMENT

const selectAll = selectorAll =>  document.querySelectorAll(selectorAll); // Select MULTIPLE ELEMENTS

// Navbar OPEN and CLOSE on Icon CLICKS (MEDIUM and SMALL Devices)
const hamburger = select(".hamburger-icon");
hamburger.addEventListener("click", () => { // NAV OPEN Event Listener
    hamburger.classList.add("active");
    select("nav").classList.add("active");

    // Add styles to SVGs
    select("#header .logo svg circle").classList.add("active");
    select("#header .logo svg g g path").classList.add("active");
    select("#header .logo svg g path").classList.add("active");
});

const nav_CLOSE = select(".nav-close-icon");
nav_CLOSE.addEventListener("click", () => { // NAV CLOSE Event Listener
    hamburger.classList.remove("active");
    select("nav").classList.remove("active");

    // Remove styles from SVGs
    select("#header .logo svg circle").classList.remove("active");
    select("#header .logo svg g g path").classList.remove("active");
    select("#header .logo svg g path").classList.remove("active");
});

// FEATURE BUTTONS functionality
const Feature_BUTTONS = selectAll(".feature-buttons button");

Feature_BUTTONS.forEach((button, index) => {
    button.addEventListener("click",() => {
        select(".feature-buttons").querySelector(".active").classList.remove("active");
        button.classList.add("active");

        select(".feature-image img").setAttribute("src", feature_CONTENT[index].image);
        select(".feature-content-text .feature-heading-text").innerText = feature_CONTENT[index].heading;
        select(".feature-content-text .feature-text").innerText = feature_CONTENT[index].text;
        select(".feature-content-text .feature-button").innerText = feature_CONTENT[index].btnText;
    });
});

// FAQ QUESTION and ANSWER toggle on Click event
const FAQ_QUESTION = selectAll(".faq-question-answer .faq-question");
FAQ_QUESTION.forEach((question, index) => {
    question.addEventListener("click", (e) => {

        selectAll(".faq-question-answer .faq-question span svg")[index].classList.toggle("active");
        selectAll(".faq-question-answer .faq-question span svg path")[index].classList.toggle("active");
        selectAll(".faq-question-answer .faq-answer p")[index].classList.toggle("active");
    });
});


// Form email validation
const form = select("form");
const regExp = /^([A-Za-z0-9._]){2,}@([A-Za-z0-9]){2,}[.]{1}([A-Za-z.]){2,6}$/; // Regular Expression for validation

const email = document.getElementById("email");

form.addEventListener("submit", (e) => {

    // Check if EMAIL Input contain RegExp
    if(!regExp.test(email.value)) {
        e.preventDefault()
        select(".email-inp img").classList.add("active")
        select(".email-inp h6").classList.add("active")
        email.classList.add("active")
    }
})