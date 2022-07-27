import feature_CONTENT from "./features.js"

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
