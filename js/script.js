// assegno la funzione a una variabile
const num = arrayUniqueNumbers(10, 50, 5);
console.log(arrayUniqueNumbers(10, 50, 5));

// dichiaro mioUl per dopo assegnarci i valori dell'array
let mioUl = document.querySelector("ul");
// dichiaro il contatore per nascondere i numeri
let contatore = document.getElementById("countdown");
// dichiaro il form
let form = document.getElementById("answers-form");
// dichiaro il bottone
let mioBottone = document.querySelector(".btn");
// dichiarazione messaggio


console.log(mioUl);

// ciclo per assegnare i valori ai li 
for (let i = 0; i < num.length; i++) {
    mioUl.innerHTML += "<li>" + num[i] + "</li>";
}

let conteggio = countdown(10);

console.log(form);

form.addEventListener('submit', controlloRisultato);

function controlloRisultato(event) {
    event.preventDefault(); // blocca il comportamento di submit
    let form = document.getElementById("answers-form");
    let messaggio = document.getElementById("message");
    let mioUl = document.querySelector("ul");
    let arrayConfronto = [];

    // ciclo su tutti gli input del form
    for (let i = 0; i < form.elements.length; i++) {
        let inputValue = form.elements[i].value;

        // ciclo su tutti i li della ul
        for (let j = 0; j < mioUl.children.length; j++) {
            if (inputValue === mioUl.children[j].textContent) {
                arrayConfronto.push(inputValue);
                break; // evita di contare più volte lo stesso numero
            }
        }
    }

    messaggio.innerHTML = "Hai indovinato " + arrayConfronto.length + " numeri";
}

