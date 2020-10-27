// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//chiedo all'utente se punta pari o dispari
var scommessa=prompt("Cosa scommetti? Scrivi pari o dispari");

console.log(scommessa);

var numeroUtente=parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log(numeroUtente);

function pcRandomNumber(moltiplicatore){
   return Math.floor(Math.random() * moltiplicatore +1);
};

var pcNumber=pcRandomNumber(5);
console.log(pcNumber)