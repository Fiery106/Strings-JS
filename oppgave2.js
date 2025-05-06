let output = document.getElementById("output");
let answer;


function genEmail() {
    let first_name = document.getElementById("first-name").value;
    let middle_name = document.getElementById("middle-name").value;
    let last_name = document.getElementById("last-name").value;


    if (!middle_name) {
        answer = `${first_name.slice(0, 3)}-${last_name}@alf.no`
        output.innerHTML = `Din epostadresse er: ${answer}`
        console.log(false)

    } else {
        answer = `${first_name}.${middle_name[0]}.${last_name.slice(0, 2)}@alf.no`
        output.innerHTML = `Din epostadresse er: ${answer}`
        console.log(true)
    }
}