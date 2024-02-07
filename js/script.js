

// prendiamo la griglia
// facciamo un for
    // per ogni iterazione creiamo una cella nella griglia






const gridElement = document.querySelector("#grid");


const randomNumbersArray = getRandomNumbersArray();

console.log(randomNumbersArray)

// griglia 7x7
for(let i = 0; i < 49; i++) {

    // creo un elemento, gli metto la classe "square" e lo aggiugno nella griglia
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    newElement.innerText = randomNumbersArray[i];


    // sto aggiungendo un event listener ad ogni quadrato che aggiungiamo
    newElement.addEventListener("click", function() {

        console.log(this);

        // come facciamo a sapere quale sia stato l'elemento html che sia stato cliccato?
        // utilizziamo this!

        // il this in questo contesto rappresenta il quadrato che è stato cliccato
        // di conseguenza possiamo manipolarlo a livello html come siamo abituati
        this.classList.toggle("active");

        
    });


    gridElement.append(newElement);

}





function getRandomNumbersArray() {

    // ne diamo sempre 49

    const numbersArray = [];

    while (numbersArray.length < 49) {


        // forza bruta: inserisci il numero solo se non è già presente
        const newNumber = generateRandomNumber(49);

        //controllo se il numero appena generato è già presente dentro il nostro array
        if( ! numbersArray.includes(newNumber) ) {

            numbersArray.push(newNumber);

        }
    }
    // console.log(numbersArray)
    return numbersArray;

}



// funzione che genera un numero random da 1 a 5
function generateRandomNumber(maxNumber) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    // restituisco il numero generato
    return randomNumber;
}
