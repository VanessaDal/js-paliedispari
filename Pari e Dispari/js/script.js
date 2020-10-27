// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//chiedo all'utente se punta pari o dispari
var scommessa=prompt("Cosa scommetti? Scrivi pari o dispari");

console.log("hai scommesso "+scommessa);

var numeroUtente=parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log("hai giocato il numero "+numeroUtente);

function pcRandomNumber(moltiplicatore){
   return Math.floor(Math.random() * moltiplicatore +1);
};

var pcNumber=pcRandomNumber(5);
console.log("il pc ha giocato il numero "+pcNumber);

// Sommiamo i due numeri
var somma=numeroUtente+pcNumber;

console.log(somma);

//stabiliamo se la somma è pari o dispari
function isItEvenOrOdd(number){
    if (number % 2===0){
    return "pari" } else {
        return "dispari";
    }
}

var pariDispari= isItEvenOrOdd(somma);
console.log("la somma dei due numeri è "+pariDispari);


//stabiliamo se l'utente ha vinto o perso
if (scommessa===pariDispari){
    console.log("Complimenti, hai vinto!");
} else{
    console.log("Mi dispiace, hai perso!");
}