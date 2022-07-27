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
