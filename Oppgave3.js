let output = document.getElementById("output");
let cost = 100;


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
    output.innerHTML = `Fergebilletten koster ${x}kr for en tur, for en passasjer som er ${y}år gammel. God tur!`
}