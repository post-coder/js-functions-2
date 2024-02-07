

const button = document.querySelector("#button");

button.addEventListener("click", function() {
    // ci fa capire quale sia stato l'agente della sua chiamata, ovvero
    // chi sia il "responsabile" della sua esecuzione
    console.log(this);
    // in questo caso infatti ci restituisce il pulsante che l'ha chiamato
});

// this: chi è che ha chiamato questa azione che è stata appena eseguita?ù
console.log(this);
// this cambia valore di volta in volta in base al contesto
// ovvero: in base a cosa l'abbia "chiamato"
// in questo caso, il codice è stato eseguito come abbiamo chiesto alla finestra
// del browser di ricaricare la pagina
// di conseguenza il this = la finestra del browser

