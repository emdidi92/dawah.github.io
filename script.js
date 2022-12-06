let burBtn = document.getElementById("icon");
let navLinks = document.getElementsByClassName("nav-l-links")[0];

let islBtn = document.getElementById("n-islam");
let xBtn = document.getElementById("n-christianity");
let dhBtn = document.getElementById("n-dawah");
let dlgBtn = document.getElementById("n-dialog");
let abBtn = document.getElementById("n-about");


// content
let islamCtn = document.getElementsByClassName("islam")[0];
let xCtn = document.getElementsByClassName("christianity")[0];
let dhCtn = document.getElementsByClassName("dawah")[0];
let dlgCtn = document.getElementsByClassName("dialog")[0];




function displayNavLink() {
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");

    } else {
        navLinks.classList.add("active");
    }
}

function displayIslam() {
    islamCtn.classList.add("active");

    navLinks.classList.remove("active");
    xCtn.classList.remove("active");
    dhCtn.classList.remove("active");
    dlgCtn.classList.remove("active");
}


function displayChristianity() {
    xCtn.classList.add("active");

    navLinks.classList.remove("active");
    islamCtn.classList.remove("active");
    dhCtn.classList.remove("active");
    dlgCtn.classList.remove("active");
}

function displayDawah() {
    dhCtn.classList.add("active");

    navLinks.classList.remove("active");
    xCtn.classList.remove("active");
    islamCtn.classList.remove("active");
    dlgCtn.classList.remove("active");
}


function displayDialog() {
    dlgCtn.classList.add("active");

    navLinks.classList.remove("active");
    xCtn.classList.remove("active");
    islamCtn.classList.remove("active");
    dhCtn.classList.remove("active");
}

function gotoAbout() {
    navLinks.classList.remove("active");
}


burBtn.addEventListener("click", displayNavLink);
islBtn.addEventListener("click", displayIslam);
xBtn.addEventListener("click", displayChristianity);
dhBtn.addEventListener("click", displayDawah);
dlgBtn.addEventListener("click", displayDialog);
abBtn.addEventListener("click", gotoAbout);
// rrmove the nav 
window.addEventListener("resize", () => {
    if (window.matchMedia(("min-width: 576px"))) {
        navLinks.classList.remove("active");
    }
})