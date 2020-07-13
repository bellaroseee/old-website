// animate the hello world text
const text = 'Hello, world!';
let i = 0;
const speed = 50;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();


// show / hide about me
function showAboutMe() {
    const content = document.getElementById("about-me-content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function showAboutMeSmall() {
    // make sure other contents are closed
    document.getElementById("projects-content-small").style.display = "none";
    document.getElementById("experience-content-small").style.display = "none";
    document.getElementById("education-content-small").style.display = "none";
    const content = document.getElementById("about-me-content-small");
    const container = document.getElementById("main-content-container-small");
    if (content.style.display === "none") {
        content.style.display = "block";
        container.style.display = "block";
        container.style.backgroundColor = "#F8A598";
    } else {
        content.style.display = "none";
        container.style.display = "none";
        container.style.backgroundColor = "#A9927D";
    }
}

// close window
function closeWindow() {
    document.getElementById("main-content-container-small").style.display = "none";
    document.getElementById("projects-content-small").style.display = "none";
    document.getElementById("experience-content-small").style.display = "none";
    document.getElementById("education-content-small").style.display = "none";
    document.getElementById("about-me-content-small").style.display = "none";
}


// show / hide works
function showWorks() {
    const content = document.getElementById("projects-content");
    const OtherContent = document.getElementById("experience-content");
    const EdContent = document.getElementById("education-content");
    EdContent.style.display = "none";
    OtherContent.style.display = "none";
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function showWorksSmall() {
    const container = document.getElementById("main-content-container-small");
    const content = document.getElementById("projects-content-small");
    const OtherContent = document.getElementById("experience-content-small");
    const EdContent = document.getElementById("education-content-small");
    OtherContent.style.display = "none";
    EdContent.style.display = "none";
    if (content.style.display === "none") {
        container.style.display = "block";
        content.style.display = "block";
        container.style.backgroundColor = "#A9927D";
    } else {
        container.style.display ="none";
        content.style.display = "none";
    }
}


// show / hide others
function showOthers() {
    const content = document.getElementById("experience-content");
    const WorksContent = document.getElementById("projects-content");
    const EdContent = document.getElementById("education-content");
    WorksContent.style.display="none";
    EdContent.style.display="none";
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function showOthersSmall() {
    const container = document.getElementById("main-content-container-small");
    const content = document.getElementById("experience-content-small");
    const WorksContent = document.getElementById("projects-content-small");
    const EdContent = document.getElementById("education-content-small");
    WorksContent.style.display="none";
    EdContent.style.display="none";
    if (content.style.display === "none") {
        container.style.display = "block";
        content.style.display = "block";
        container.style.backgroundColor = "#A9927D";
    } else {
        container.style.display = "none";
        content.style.display = "none";
    }
}


// show / hide education
function showEducation() {
    const content = document.getElementById("education-content");
    const OtherContent = document.getElementById("experience-content");
    const WorksContent = document.getElementById("projects-content");
    OtherContent.style.display = "none";
    WorksContent.style.display="none";
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function showEducationSmall() {
    const container = document.getElementById("main-content-container-small");
    const content = document.getElementById("education-content-small");
    const OtherContent = document.getElementById("experience-content-small");
    const WorksContent = document.getElementById("projects-content-small");
    OtherContent.style.display = "none";
    WorksContent.style.display="none";
    if (content.style.display === "none") {
        container.style.display = "block";
        content.style.display = "block";
        container.style.backgroundColor = "#A9927D";
    } else {
        container.style.display = "none";
        content.style.display = "none";
    }
}