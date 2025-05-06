let bruker = "JohnSnow";
let pass = "supaHhemmelige345Greier!";

let utskrift = document.getElementById("utskrift");


function submitFunc() {
    let hent_bruker = document.getElementById("username").value
    let hent_pass = document.getElementById("password").value


    if (hent_bruker == bruker && hent_pass == pass) {
        utskrift.innerHTML = `Velkommen! Du er logget inn som "${bruker}"`
        utskrift.classList.add("verified");
        utskrift.classList.remove("refused");
    } else {
        utskrift.innerHTML = "Brukernavn eller passord var feil!"
        utskrift.classList.add("refused");
        utskrift.classList.remove("verified");
    }
}