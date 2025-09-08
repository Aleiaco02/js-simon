// assegno la funzione a una variabile
const num = arrayUniqueNumbers(10, 50, 5);
console.log(arrayUniqueNumbers(10, 50, 5));

// dichiaro mioUl per dopo assegnarci i valori dell'array
let mioUl = document.querySelector("ul");
// dichiaro il contatore per nascondere i numeri
let contatore = document.getElementById("countdown");
// dichiaro il form
let form = document.getElementById("answers-form");

console.log(mioUl);

// ciclo per assegnare i valori ai li 
for (let i = 0; i < num.length; i++) {
    mioUl.innerHTML += "<li>" + num[i] + "</li>";
}

let conteggio = countdown(10);

if (contatore = "") {
    form.classList.remove("d-none");
}

