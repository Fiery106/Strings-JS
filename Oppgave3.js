let output = document.getElementById("output");
let output2 = document.getElementById("output2");

let cost = 100;
let total = 0;


function calcCost() {
    let age = document.getElementById("age").value;


    if (age) { //sjekk om alder feltet er ikke tom
        if (age < 12) { //50% rabatt for barn
            writeMessage(cost/2, age)
    
        } else if (age > 67) { //20% rabatt for eldre
            writeMessage(cost/1.25, age)
            
        } else { //full pris
            writeMessage(cost, age)
        }
    }
}


function writeMessage(x, y) {
    output.innerHTML = `Fergebilletten koster ${x}kr for en tur, for en passasjer som er ${y} år gammel. God tur!`
}



function calcPassangers() {
    let children = document.getElementById("children").value;
    let adults = document.getElementById("adults").value;
    let elderly = document.getElementById("elderly").value;

    
    total = children * (cost/2) + adults * (cost/1.25) + elderly * cost
    writeMesssage2(children, adults, elderly, total)
}


function writeMesssage2(barn, voksen, gammel, w) {
    output2.innerHTML = `Total billettkostnaden for ${barn} barna, ${voksen} voksne og ${gammel} pensjonister blir ${w}kr`
}