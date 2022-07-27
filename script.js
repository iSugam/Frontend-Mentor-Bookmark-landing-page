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

const feature_CONTENT = [
    {
        image: "images/illustration-features-tab-1.svg",
        heading: "Bookmark in one click",
        text: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
                gives you complete control over how you manage your favourite sites.`,
        btnText: "More Info"
    },
    {
        image: "images/illustration-features-tab-2.svg",
        heading: "Intelligent search",
        text: `Our powerful search feature will help you find saved sites in no time at all. 
                No need to trawl through all of your bookmarks.`,
        btnText: "More Info"
    },
    {
        image: "images/illustration-features-tab-3.svg",
        heading: "Share your bookmarks",
        text: `Easily share your bookmarks and collections with others. Create a shareable 
                link that you can send at the click of a button.`,
        btnText: "More Info"
    }
]
const Feature_BUTTONS = selectAll(".feature-buttons button");

Feature_BUTTONS.forEach((button, index) => {
    button.addEventListener("click",() => {
        select(".feature-buttons").querySelector(".active").classList.remove("active");
        button.classList.add("active");

        select(".feature-image img").setAttribute("src", feature_CONTENT[index].image)
        select(".feature-content-text .feature-heading-text").innerText = feature_CONTENT[index].heading
        select(".feature-content-text .feature-text").innerText = feature_CONTENT[index].text
        select(".feature-content-text .feature-button").innerText = feature_CONTENT[index].btnText
    });
});
