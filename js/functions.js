
// funzione che mi genere un numero random
function numRandomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione che genera un array di tot numeri in un range
function arrayUniqueNumbers(numMin, numMax, numberElemnts) {
    // mi creo un array vuoto di partenza
    let arrayNumeri = [];
    // ciclo l'array creato FINO CHE è più corto di numberElemnts
    
    while (arrayNumeri.length < numberElemnts ) {
        let nuovoNumero = numRandomGen(numMin, numMax);

        if (!arrayNumeri.includes(nuovoNumero)) {
        arrayNumeri.push(nuovoNumero);
        }
    }
    
    return arrayNumeri
}

// funzione countdown
function countdown(num) {
    let contatore = document.getElementById("countdown")
    let form = document.getElementById("answers-form");
    let mioUl = document.querySelector("ul");

        setInterval(() => {
            contatore.innerHTML = num; 
            num--
            if (num < 0) {
                contatore.innerHTML = "0";
                clearInterval();
                form.classList.remove("d-none");
                mioUl.classList.add("d-none");
            }
        }, 1000);
}

