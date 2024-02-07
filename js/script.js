

// variabili globali
// perchè sono state dichiarate fuori da delle parentesi graffe
// di conseguenza sono accessibili ovunque
const variabile = "testo";


if (1 < 2 ) {
    console.log(variabile)

    // variabili scope
    // sono variabili che sono state inizializzate dentro delle graffe, 
    // di conseguenza non sono leggibili e trovabili al di fuori
    const variabile2 = "Testo 2";

    console.log(variabile2);

    if(true) {
        console.log(variabile2)
    }
}

// console.log(variabile2) //errore, la variabile non viene trovata



for(let i = 0; i < 3; i++)  {
    console.log(i);
}

// console.log(i) //errore, la variabile non viene trovata

console.log("-------------------------")







// ATTENZIONE
// questa istruzione cancella tutto il contenuto della console, ci serve 
// per avere più ordine, tranquilli, commentatelo per rivedere gli output precedenti
console.clear();


// come vediamo, l'utilizzo di una variabile "var" prima dell'inizializzazione non dà alcun errore
console.log(parola);


if(true) {
    var parola = "testo";
}

// stessa cosa per l'utilizzo di una variabile che è stata creata in un altro scope
console.log(parola)


