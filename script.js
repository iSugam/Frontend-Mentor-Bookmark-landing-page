const select = (selector) => { // Select SINGLE ELEMENT
    const select = document.querySelector(selector);
    return select
};

const selectAll = (selector) => { // Select MULTIPLE ELEMENTS
    const selectAll = document.querySelectorAll(selector);
    return selectAll
};

// Navbar open and close
const hamburger = select(".hamburger-icon");
hamburger.addEventListener("click", () => { // NAV OPEN Event Listener
    hamburger.classList.add("active");
    select("nav").classList.add("active");
    select("#header .logo svg circle").classList.add("active");
    select("#header .logo svg g g path").classList.add("active");
    select("#header .logo svg g path").classList.add("active");
});

const nav_CLOSE = select(".nav-close-icon");
nav_CLOSE.addEventListener("click", () => { // NAV CLOSE Event Listener
    hamburger.classList.remove("active");
    select("nav").classList.remove("active");
    select("#header .logo svg circle").classList.remove("active");
    select("#header .logo svg g g path").classList.remove("active");
    select("#header .logo svg g path").classList.remove("active");
})
