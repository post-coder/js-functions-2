

// prendiamo la griglia
// facciamo un for
    // per ogni iterazione creiamo una cella nella griglia






const gridElement = document.querySelector("#grid");

// griglia 7x7
for(let i = 0; i < 49; i++) {

    // creo un elemento, gli metto la classe "square" e lo aggiugno nella griglia
    const newElement = document.createElement("div");
    newElement.classList.add("square");


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


