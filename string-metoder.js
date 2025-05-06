// alert("message");

function alertMessage(x) {
    alert(x);
}


function sliceFunc() {
    let sample = document.getElementById("sliceText").innerText;

    alertMessage(sample.slice(45, sample.length - 8))
}


function lengthFunc() {
    let sample = document.getElementById("lengthText").innerText;

    alertMessage(sample.length)
}


function upperFunc() {
    let sample = document.getElementById("upperText").innerText;

    alertMessage(sample.toUpperCase())
}


function lowerFunc() {
    let sample = document.getElementById("lowerText").innerText;

    alertMessage(sample.toLowerCase())
}


function replaceFunc() {
    let sample = document.getElementById("replaceText").innerText;

    alertMessage(sample.replace("Pompel", "Pilt"))
}


function subFunc() {
    let sample = document.getElementById("subText").innerText;

    alertMessage(sample.substr(14, 5))
}


function indexOfFunc() {
    let sample = document.getElementById("indexOfText").innerText;

    alertMessage(sample.indexOf("fantomet"))
}


function includeFunc() {
    let sample = document.getElementById("includeText").innerText;

    alertMessage(sample.includes("inne"))
}